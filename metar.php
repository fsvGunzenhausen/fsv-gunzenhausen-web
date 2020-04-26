<?php
function get_metar($station, &$wxInfo) {
        $fileName = "https://tgftp.nws.noaa.gov/data/observations/metar/stations/EDDN.TXT";
        $metar = '';
        $fileData = @file($fileName);  // or die('Data not available');
        if ($fileData != false) {
                list($i, $date) = each($fileData);
                $utc = strtotime(trim($date));
                set_time_data($utc,$wxInfo);
                while (list($i, $line) = each($fileData)) {
                        $metar .= ' ' . trim($line);
                        }
                $metar = trim(str_replace('  ', ' ', $metar));
                }
        return $metar;
        }

function get_taf($station, &$wxInfo) {
        $fileName = "https://tgftp.nws.noaa.gov/data/forecasts/taf/stations/EDDN.TXT";
        $metar = '';
        $fileData = @file($fileName);  // or die('Data not available');
        if ($fileData != false) {
                list($i, $date) = each($fileData);
                $utc = strtotime(trim($date));
                set_time_data($utc,$wxInfo);
                while (list($i, $line) = each($fileData)) {
                        $metar .= ' ' . trim($line);
                        }
                $metar = trim(str_replace('  ', ' ', $metar));
                }
        return $metar;
        }

function set_time_data($utc, &$wxInfo) {
        $timeZoneOffset = date('Z');
        $local = $utc + $timeZoneOffset;
        $wxInfo['OBSERVED'] = date('D M j, H:i T',$local);
        $now = time();
        $wxInfo['NOW'] = date('D M j, H:i T',$now);
        $timeDiff = floor(($now - $local) / 60);
        if ($timeDiff < 91) $wxInfo['AGE'] = "$timeDiff min ago";
        else {
                $min = $timeDiff % 60;
                if ($min < 10) $min = '0' . $min;
                $wxInfo['AGE'] = floor($timeDiff / 60) . ":$min hr ago";
                }
        }

header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');
header('Expires: Sat,1 Jan 2000 00:00:01 GMT');

$fn = "metartaf.txt";
$lock = "metartaf.lck";
$str = "METAR/TAF not available";

if (!file_exists($lock) && (!file_exists($fn) || (time() - filemtime($fn)) > 150)) {
	$fd = fopen($lock, "w"); fclose ($fd);	

	$station = "EDDN";
	$station = strtoupper($station);
	$wxInfo['STATION'] = $station;

	$metar = get_metar($station,$wxInfo);
        $taf = get_taf($station,$wxInfo);
        $str = "$metar<br>$taf";
	
	$fd = fopen($fn, "w");
	fwrite($fd, $str);
	fclose($fd);

	unlink($lock);
} else {
	$fd = fopen($fn, "r");
	if ($fd) {
		$str = fread($fd, 1024);
		fclose($fd);
	}
}

$age = time() - filemtime($fn);
$str = "<div style=\"color:yellow;font-size:55%;left-margin:6px;right-margin:6px;vertical-align:middle\">METAR $str</div>";

echo $str;
?>