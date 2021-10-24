class HamburgerMenu {
    static ACTIVE_BTN = 'menu-btn-active';
    static ACTIVE_LIST_MENU = 'menu-list-active';

    constructor(el) {
        this.el = el;
        const [button, menu] = [...el.children];
        button.addEventListener('click', this.btnHandleClick.bind(this));
        menu.addEventListener('click', this.menuHandleClick.bind(this));
    }
    
    btnHandleClick(e) {
        const menu = this.el.lastElementChild;
        e.target.classList.toggle(HamburgerMenu.ACTIVE_BTN);
        menu.classList.toggle(HamburgerMenu.ACTIVE_LIST_MENU);
    }

    menuHandleClick(e) {
        const btn = this.el.firstElementChild;
        const menu = this.el.lastElementChild;
        if (btn.classList.contains(HamburgerMenu.ACTIVE_BTN)) {
            menu.classList.remove(HamburgerMenu.ACTIVE_LIST_MENU);
            btn.classList.toggle(HamburgerMenu.ACTIVE_BTN);
        }
    }
}
