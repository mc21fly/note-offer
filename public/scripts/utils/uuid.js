export default function uuid() {
    return `_${Math.random().toString(36).substring(2)}`;
}
