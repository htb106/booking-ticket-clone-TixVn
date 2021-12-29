import { GROUPID } from "util/settings/config";
import { baseService } from "./baseService";

export class ManageMovieService extends baseService {
  constructor(props) {
    super(props);
  }

  getBanner = () => this.get("QuanLyPhim/LayDanhSachBanner");

  getMovieList = () => this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);

  getMovieDetail = (id) => this.get(`QuanLyPhim/LayThongTinPhim?maPhim=${id}`);

  addMovie = (formData) =>this.post(`QuanLyPhim/ThemPhimUploadHinh`, formData);

  deleteMovie = (id) => this.delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`);

  editMovie = (formData) => this.post(`QuanLyPhim/CapNhatPhimUpload`, formData);

  getInfoShowTimes = (id) => this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);

  createShowTimes = (data) => this.post("QuanLyDatVe/TaoLichChieu", data)
}

export const manageMovieService = new ManageMovieService();
