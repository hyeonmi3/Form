function check() {
  const business_name = document.getElementById('business_name');
  const representative = document.getElementById('representative');
  const registration_number = document.getElementById('registration_number');
  const representative_number = document.getElementById('representative_number');
  const customerid = document.getElementById('customerid');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');

  const classification = 'input[name="classification"]:checked';
  const classification2 = document.querySelector(classification);

  const privacy_consent = 'input[name="privacy_consent"]:checked';
  const privacy_consent2 = document.querySelector(privacy_consent);

  const howtosave = 'input[name="howtosave"]:checked';
  const howtosave2 = document.querySelector(howtosave);


  if (business_name.value.length == 0) {
    alert("상호명을 입력하세요.");
    return false;
  }
  if (representative.value.length == 0) {
    alert("대표자이름을 입력하세요.");
    return false;
  }
  if (registration_number.value.length == 0) {
    alert("사업자 등록 번호를 입력하세요.");
    return false;
  }
  else if (isNaN(registration_number.value)) {
    alert("숫자만 입력해 주세요.");
    return false;
  }
  if (representative_number.value.length == 0) {
    alert("대표 전화번호를 입력하세요.");
    return false;
  }
  else if (isNaN(representative_number.value)) {
    alert("숫자만 입력해 주세요.");
    return false;
  }
  if (customerid.value.length == 0) {
    alert("거래처 Id를 입력하세요.");
    return false;
  }
  if (password.value.length == 0) {
    alert("비밀번호를 입력하세요.");
    return false;
  }
  else if (password.value.length < 4) {
    alert("비밀번호는 4글자이상 입력하세요.");
    return false;
  }
  if (password2.value.length == 0) {
    alert("확인할 비밀번호를 입력하세요.");
    return false;
  }
  else if (password2.value != password.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }
  if (classification2 == null) {
    alert("분류를 선택해주세요.");
    return false;
  }
  if (privacy_consent2 == null) {
    alert("개인정보동의를 선택해주세요.");
    return false;
  }
  if (howtosave2 == null) {
    alert("처리 방법을 선택해주세요.");
    return false;
  }

  return true;
}