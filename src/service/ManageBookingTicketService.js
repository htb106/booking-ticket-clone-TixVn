import { baseService } from "./baseService";

export class ManageBookingTicketService extends baseService{
    constructor(props){
        super(props)
    }

    getInfoBookingRoom = (id) => this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);

    selectedSeat = (data) => this.post("QuanLyDatVe/DatVe", data);
}

export const manageBookingTicketService = new ManageBookingTicketService();