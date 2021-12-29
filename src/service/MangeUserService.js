const { baseService } = require("./baseService")

export class ManageUserService extends baseService{
    constructor(props){
        super(props)
    };

    login = (data) => this.post("QuanLyNguoiDung/DangNhap", data);

    register = (data) => this.post("QuanLyNguoiDung/DangKy", data);

    getInfoProfile = () => this.post("QuanLyNguoiDung/ThongTinTaiKhoan"); 

    editUserProfile = (data) => this.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data)
}

export const manageUserService = new ManageUserService();