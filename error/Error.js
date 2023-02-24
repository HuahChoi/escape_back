export class Error {
  static BAD_REQUEST = { status: 400, code: "BAD_REQUEST", message: "잘못된 요청입니다." };
  static ID_EMPTY = { status: 400, code: "ID_EMPTY", message: "아이디를 입력해주세요." };
  static PW_EMPTY = { status: 400, code: "PW_EMPTY", message: "비밀번호를 입력해주세요." };
  static NAME_EMPTY = { status: 400, code: "NAME_EMPTY", message: "이름을 입력해주세요." };
  static UN_AUTHORIZED = { status: 401, code: "UN_AUTHORIZED", message: "아이디, 비밀번호를 확인해주세요." };
  static NOT_FOUND = { status: 404, code: "NOT_FOUND", message: "요청하신 QR 정보가 존재하지 않습니다." };
  static ID_EXIST = { status: 409, code: "ID_EXIST", message: "이미 존재하는 아이디입니다." };
  static CONFLICT = { status: 409, code: "CONFLICT", message: "이미 완료된 코스입니다." };
  static INTERNAL_SERVER_ERROR = { status: 500, code: "INTERNAL_SERVER_ERROR", message: "서버 에러" };
}
