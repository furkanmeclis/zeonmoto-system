<?php
$projectRoot = realpath(__DIR__ . '/../');
putenv("COMPOSER_HOME={$projectRoot}/.composer");
if (!file_exists("{$projectRoot}/composer.phar")) {
    copy('https://getcomposer.org/composer.phar', "{$projectRoot}/composer.phar");
}
$output = shell_exec("cd {$projectRoot} && php composer.phar install 2>&1");
echo "<pre>$output</pre>";
