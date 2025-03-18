import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">İletişim</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="tel:+905458870147" className="text-base text-gray-500 hover:text-gray-900">
                                    +90 545 887 0147
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@zehirmotor.com" className="text-base text-gray-500 hover:text-gray-900">
                                    info@zehirmotor.com
                                </a>
                            </li>
                            <li className="text-base text-gray-500">
                                İstanbul, Türkiye
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Sosyal Medya</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Hakkımızda</h3>
                        <p className="mt-4 text-base text-gray-500">
                            Zehir Motor, motosiklet yedek parçaları konusunda uzmanlaşmış bir e-ticaret platformudur. 
                            Kaliteli ürünler ve uygun fiyatlarla müşterilerimize hizmet vermekteyiz.
                        </p>
                    </div>
                </div>
                
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Zehir Motor. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 