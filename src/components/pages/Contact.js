import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1></h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">이메일 주소</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              우리는 귀하의 정보를 공유하지 않습니다.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">비밀번호</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">내용</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>  
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              개인정보 수집 동의
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;