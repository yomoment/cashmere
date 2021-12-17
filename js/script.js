//#1. 텍스트 및 이미지를 2차 배열로 구성
//2차 배열 패턴 ["타이틀", "내용", "이미지 파일"]
var $cont_01 = [
  ["ANIMAL", "Cashmere values every life on this planet. All our products are made from naturally-shed hair without harming the animals. We set our friends free at all times, providing them with high-quality grass only.", "intro_01.jpg"],
  ["LOCAL PRODUCERS", "Cashmere believes in mutual growth with everyone engaged in our journey. We support our local producers’ economic independence through reliable buying practice and brand creation.", "intro_02.jpg"],
  ["ENVIRONMENT", "Cashmere cares foremost about our nature. From attentive pasture management to zerowaste technology, in every step of our process protecting environment is our top priority. Buy one le cashmere, adopt one tree.", "intro_03.jpg"],
];


//#2. 하위 요소를 담을 곳을 선택
var $content1 = document.querySelector("#cont_01 article:first-child .content");

//#3. 내부 패턴을 수집할 공간
var $content1_box = "";

//#4. 1차 배열의 개수만큼 반복실행하면서 각 해당하는 데이터를 넣음
for(v of $cont_01){
  $content1_box += `
  <div class="cont_box">
    <div class="subject">${v[0]}</div>
    <div class="img_cont" style="background-image:url(./img/${v[2]});"></div>
    <p class="txt_cont">${v[1]}</p>
  </div>
  `;
}
//#5. 반복 종료 후 수집된 html태그를 포함한 데이터를 지정된 하위 요소에 넣는다.
$content1.innerHTML = $content1_box;