function extractFile(str) {
    let parts = str.split('\\');
    let file = parts[parts.length - 1];

    let lastDotIndex = file.lastIndexOf('.');
    let fileName = file.substring(0, lastDotIndex);
    let extension = file.substring(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');