/**
 * SOTI MobiControl file editing javascript wrapper
 * @author Andrew Khassapov
 * @version 1.0.0
 * @example In SOTI MobiControl: Select 'Send Script' > Tick the 'JavaScript' box > Paste script into Script Editor > Press 'SEND SCRIPT'.
 *          '/mnt/sdcard/example_file.txt'
 * @see {@link https://www.soti.net/mc/help/javascriptapi/en/index.html} Refer to the SOTI MobiControl Android Agent JavaScript API
 *      Note SOTI API does not support 'let'. Use 'var' instead.
 *      Note SOTI API does not support string literal variables, `${var}`. Use "+var+" instead.
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
// Ad hoc use cases:
backupFile('/sdcard/honeywell/persist/DeviceConfig.xml', '/sdcard/honeywell/persist/DeviceConfig.xml.bak');

// Example: createFile('/mnt/sdcard/example_file.txt');
function createFile(fileFull) {
    let file = new mobicontrol.io.File(fileFull);
    if (file.exists) {
        mobicontrol.log.info(`File ` + fileFull + ` exists`);
        return;
    } else {
        file.createFile();
    }
}

// Example: editFile('/sdcard/honeywell/persist/DeviceConfig.xml', '<Key name="screen_off_timeout">1800000</Key>', '<Key name="screen_off_timeout">9000</Key>');
function editFile(fileFull, findText, replacementText)
{
    var file = new mobicontrol.io.File(fileFull);
    if(!file.exists){
        mobicontrol.log.info(`Error: File does not exist: ` + fileOriginal);
        return;
    }

    var dataIn = file.readText();
    var dataOut = dataIn.replace(findText, replacementText);
    
    var outputFile = new mobicontrol.io.File(fileFull);
    outputFile.writeText(dataOut);
}
// Ad hoc use cases:
editFile('/sdcard/honeywell/persist/DeviceConfig.xml','<Key name="SelectTimeZone">Australia/Sydney</Key>','');
editFile('/sdcard/honeywell/persist/DeviceConfig.xml','<Key name="SelectTimeZone">Australia/Brisbane</Key>','');

// Example: honeywellSection("Provisioning Mode") returns everything between <Section name="Provisioning Mode"></Section>
function honeywellSection(sectionName)
{
    var regex = new RegExp('(?<=<Section\sname="'+sectionName+'">).*?(?=\s+<\/Section>)', 'gsi');
    return regex;
}