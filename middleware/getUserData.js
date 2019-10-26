export default function (context) {
    const token = localStorage.getItem('renewToken');

    if (token) {
        context.$api.getUserData(token);
    }
}