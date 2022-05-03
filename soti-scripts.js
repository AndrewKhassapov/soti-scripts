/**
 * SOTI MobiControl file editing javascript base
 * @author Andrew Khassapov
 * @version 1.0.0
 * @example In SOTI MobiControl: Select 'Send Script' > Tick the 'JavaScript' box > Paste script into Script Editor > Press 'SEND SCRIPT'.
 *          '/mnt/sdcard/example_file.txt'
 * @see {@link https://www.soti.net/mc/help/javascriptapi/en/index.html} Refer to the SOTI MobiControl Android Agent JavaScript API
 */

// Example: backupFile('/sdcard/honeywell/persist/DeviceConfig.xml', '/sdcard/honeywell/persist/DeviceConfig.xml.bak');
function backupFile(fileOriginal, fileNew) {
    var source = new mobicontrol.io.File(fileOriginal);
    if(!source.exists){
        mobicontrol.log.info(`Error: File does not exist: ` + fileOriginal);
        return;
    }

    var destination = new mobicontrol.io.File(fileNew);
    source.copyTo(destination);
}

// Example: createFile('/mnt/sdcard/example_file.txt');
function createFile(fileFull) {
    var file = new mobicontrol.io.File(fileFull);
    if (file.exists) {
        mobicontrol.log.info(`File ` + fileFull + ` exists`);
    } else {
        file.createFile();
    }
}

/*const fileName = 'DeviceConfig.xml';
const fileDir = '/mnt/sdcard/honeywell/persist/';
var fileFull = fileDir.toString() + fileName.toString();

var inputFile;
try{
    inputFile = new mobicontrol.io.File(fileFull);
} catch(e)
{}

var data = inputFile.readText();
//var result = data.replace(/yahoo.com/g, 'google.com');

var outputFile = new mobicontrol.io.File(‘someFile’);
outputFile.writeText(result);
*/