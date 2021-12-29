import { GROUPID } from "util/settings/config";
import { baseService } from "./baseService";

export class ManageTheaterService extends baseService{
    constructor(props){
        super(props)
    };
    getTheaterSystem = () => this.get("QuanLyRap/LayThongTinHeThongRap");
    
    getTheaterGroup = theaterSystemCode => this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterSystemCode}`);

    getTheaterInfo = theaterSystemCode => this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${theaterSystemCode}&maNhom=${GROUPID}`);
};

export const manageTheaterService = new ManageTheaterService();