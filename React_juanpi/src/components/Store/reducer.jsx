export default (state = {
    author: 'andy_lin',
    age: '18',
    show_nav: true,
    admin_online: false,
    admin_name: '与神对话1994',
    admin_phone: '18812123434',
    admin_psw: '123456'
}, action) => {
    switch (action.type) {
        case 'nav_is_close':
            state.show_nav = false;
            return state;

        case 'nav_is_show':
            state.show_nav = true;
            return state;

        case 'admin_is_on':
            state.admin_online = true;
            return state;

        default:
            return state
    }
}