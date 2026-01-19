// 1. 학생 계정 데이터 (임시 예시)
// 실제 사용 시 이 부분을 수정하면 됩니다.
const accounts = [
  {
    studentNo: "10101",
    name: "김하나",
    id: "10101@school.go.kr",
    pw: "abc123!"
  },
  {
    studentNo: "10102",
    name: "이둘",
    id: "10102@school.go.kr",
    pw: "qwe456!"
  }
];

// 2. form 제출 이벤트 처리 (버튼 클릭 + 엔터)
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지

  const studentNo = document.getElementById("studentNo").value.trim();
  const studentName = document.getElementById("studentName").value.trim();
  const resultDiv = document.getElementById("result");

  // 3. 입력값 확인
  if (studentNo === "" || studentName === "") {
    resultDiv.innerHTML = "<p>학번과 이름을 모두 입력하세요.</p>";
    return;
  }

  // 4. 계정 검색
  const account = accounts.find(
    (item) => item.studentNo === studentNo && item.name === studentName
  );

  // 5. 결과 출력
  if (account) {
    resultDiv.innerHTML = `
      <p>구글 계정 ID: <strong>${account.id}</strong></p>
      <p>비밀번호: <strong>${account.pw}</strong></p>
    `;
  } else {
    resultDiv.innerHTML = "<p>일치하는 계정 정보가 없습니다.</p>";
  }
});