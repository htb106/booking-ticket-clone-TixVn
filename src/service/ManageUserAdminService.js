import { GROUPID } from "util/settings/config";
import { baseService } from "./baseService";

export class ManageUserAdminSevice extends baseService{
    constructor(props){
        super(props)
    }

    getUserList = () => this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`);

    addUser = (user) => this.post("QuanLyNguoiDung/ThemNguoiDung", user);

    editUser = (user) => this.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user);

    deleteUser = (account) => this.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);

    getInfoUser = (account) => this.post(`QuanLyNguoiDung/LayThongTinNguoiDung?TaiKhoan=${account}`)
}

export const manageUserAdminService = new ManageUserAdminSevice();
