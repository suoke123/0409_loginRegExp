$(function(){

    $("button").click(function(){

        var uID = $("#uID").val().trim();      // uID value값이 공백이라는 의미
        // 입력된 ID value 가져오기 및 공백제거(메서드 체인 적용)
        var uPW = $("#uPW").val().trim();    //=> 변수 uID에 저장된 내용이 ""라면 공백을 의미함
        var regExpID = /[^a-z|A-Z|0-9|_]/;
        // ID 정규표현식 유효성 검사
        var regExpPW = /[^a-z|A-Z|0-9|_#]/;
        // PW 정규표현식 유효성 검사

        if (uID == "" || regExpID.test(uID)) {
        // ------------ or -----------------------
        //       true                true
        //  아이디가 공백   정규표현식조건에 맞지 않음
        //                      = 영어, 숫자, 밑줄 이외의 값이 있음
            alert("아이디를 올바르게 입력해주세요.");
            $("#uID").focus().val("");   // 공백제거
        } else if (uPW == "" || regExpPW.test(uPW)) {
            alert("비밀번호를 올바르게 입력해주세요.");
            $("#uPW").focus().val("");   // 공백제거
        } else {
            alert("OK");
        }
        // uID, uPW를 나눠서 쓰면 독립 실행된다. 그래서 변수를 같이 쓰고 else if를 써서 독립 실행되지 않게 함

    });

});
