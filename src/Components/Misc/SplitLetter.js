export default function SplitLetter(string) {
    console.log(string);
    const strArray = string.split('');
    return strArray.map(item => <span>{item}</span>)
}