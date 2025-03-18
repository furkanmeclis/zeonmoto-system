import {Card} from 'primereact/card';
import {useState, useEffect, useRef} from 'react';
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {FileUpload} from "primereact/fileupload";
import useSmsCounter from "@/libs/useSmsCounter.js";
import {Dialog} from "primereact/dialog";
import {Dropdown} from "primereact/dropdown";
import {Divider} from "primereact/divider";
import {ScrollPanel} from "primereact/scrollpanel";
import {InputTextarea} from "primereact/inputtextarea";
import {confirmPopup} from "primereact/confirmpopup";
import {BlockUI} from "primereact/blockui";

const ExcelImport = ({csrf_token}) => {
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);
    const [columns, setColumns] = useState([]);
    const [demoData, setDemoData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState(0);
    const [length, setLength] = useState(0);
    const {message, setMessage, charCount, smsCount} = useSmsCounter();
    const isPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return false;
        if (phoneNumber === '') return false;
        if (phoneNumber === null) return false;
        const cleaned = String(phoneNumber)
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll("+", "");
        const last10 = cleaned.slice(-10);
        const regex = /^5\d{9}$/;
        return regex.test(last10);
    }
    const uploadFile = (file, callback) => {
        const formData = new FormData();
        formData.append('file', file);
        setLoading(true);
        fetch(route("groups.import"), {
            headers: {
                'X-CSRF-TOKEN': csrf_token
            }, method: 'POST', body: formData,

        })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setColumns(data.columns);
                    setDemoData(data.demoData);
                    setLength(data.count);
                    setVisible(true);
                    toast.current.show({
                        severity: 'success',
                        summary: 'Başarılı',
                        detail: "Sütun Seçerek Ve Mesajınızı Yazarak İşlemi Tamamlayabilirsiniz."
                    });
                    callback();
                } else {
                    toast.current.show({severity: 'error', summary: 'Hata', detail: data.message});
                }
            })
            .catch(error => {
                toast.current.show({severity: 'error', summary: 'Hata', detail: error.message});
            })
            .finally(() => {
                setLoading(false);
            });
    }
    const sendMessage = (event) => {
        if (charCount === 5) {
            toast.current.show({
                severity: 'warn', summary: 'Hata', detail: "Mesajınız Boş Olamaz", life: 3000
            });
            return;
        }
        confirmPopup({
            target: event.currentTarget,
            message: `Bu Mesaj İçin Toplam ${smsCount * length} SMS Kullanılacaktır. Onaylıyor Musunuz?`,
            icon: "pi pi-info-circle",
            acceptLabel: "Gönder",
            acceptIcon: "pi pi-send",
            rejectIcon: "pi pi-times",
            rejectLabel: "Vazgeç",
            defaultFocus: 'accept',
            accept: () => {
                setLoading(true);
                let formData = new FormData();
                formData.append('message', message);
                formData.append("selectedColumn", selectedColumn);
                fetch(route('groups.importSend'), {
                    method: 'POST', headers: {
                        'X-CSRF-TOKEN': csrf_token
                    }, body: formData
                }).then(response => response.json()).then(data => {
                    if (data.status) {
                        toast.current.show({
                            severity: 'success', summary: 'Başarılı', detail: data.message, life: 3000
                        });
                        setVisible(false);
                        setMessage('');
                        setSelectedColumn(0);
                        setDemoData([]);
                        setColumns([]);
                        setLength(0);

                    } else {
                        toast.current.show({
                            severity: 'error', summary: 'Hata', detail: data.message, life: 3000
                        });
                    }
                }).catch((error) => {
                    toast.current.show({
                        severity: 'error', summary: 'Hata', detail: "CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."
                    });
                }).finally(() => {
                    setLoading(false);
                });
            }
        });
    }
    return <div className={"col-span-3"}>
        <Toast ref={toast}/>
        <Card title={"Excel İle SMS Gönderimi"} className={"w-full"}>
            <BlockUI blocked={loading}>
                <FileUpload
                    name="file"
                    accept=".xlsx"
                    maxFileSize={1000000}
                    emptyTemplate={<p className="m-0">Lütfen Numaraları İçeren Bir Excel Seçiniz.</p>}
                    chooseLabel={"Dosya Seçin"}
                    chooseOptions={{
                        icon: 'pi pi-fw pi-file-excel', className: 'p-button-raised p-button-info p-button-sm'
                    }}
                    uploadLabel={"Yükle"}
                    uploadOptions={{
                        icon: 'pi pi-fw pi-upload', className: 'p-button-raised p-button-success p-button-sm'
                    }}
                    cancelLabel={"İptal"}
                    cancelOptions={{
                        icon: 'pi pi-fw pi-times', className: 'p-button-raised p-button-danger p-button-sm'
                    }}
                    customUpload
                    uploadHandler={(e) => {
                        uploadFile(e.files[0], () => {
                            e.options.clear();
                        });
                    }}
                />
            </BlockUI>
        </Card>
        <Dialog header="Toplu Sms Gönderimi" visible={visible} draggable={false} style={{width: '50vw'}} modal
                footer={<>

                    <Button label="Vazgeç" icon="pi pi-times" size={"small"} className="p-button-danger"
                            loading={loading} onClick={() => {
                        setVisible(false);
                        setMessage('');
                        setSelectedColumn(0);
                        setDemoData([]);
                        setColumns([]);
                    }}/>
                    <Button label="Gönder" icon="pi pi-send" size={"small"} className="p-button-success"
                            loading={loading} onClick={sendMessage}/>
                </>}
                onHide={() => setVisible(false)}>
            <label htmlFor="columnSelect" className={"font-semibold"}>Sütun Seçimi(Lütfen Sadece Cep Telefonlarının
                Olduğu Sütunu Seçiniz)</label>
            <Dropdown value={selectedColumn} filter loading={loading} inputId={"columnSelect"} className={"w-full"}
                      options={columns.map((item, index) => ({label: item, value: index}))}
                      onChange={(e) => setSelectedColumn(e.value)} placeholder="Sütun Seçin"/>
            <Divider/>
            <>

                <p>
                    Örnek Veri (Veriler Yüklenen Excel Dosyasından Gelmektedir)
                </p>
                <ul className={"grid grid-cols-2"}>
                    {demoData.map((item, index) => <li className={"my-0.5 py-0.5"} key={index}>
                        <i className={`pi pi-phone mr-2 ${isPhoneNumber(item[selectedColumn]) ? 'text-green-600' : 'text-red-500'}`}></i>
                        <span className={"font-semibold"}>{item[selectedColumn] ?? "Veri Yok"}</span></li>)}
                </ul>
                <Divider/>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="name" className={"font-semibold"}>Mesaj [{charCount} Karakter
                            / {smsCount * length} SMS]</label>
                        <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                                       rows={3} cols={20} autoResize placeholder="Mesajınızı Giriniz"/>
                    </div>
                </div>
            </>
        </Dialog>
    </div>
}
export default ExcelImport;
