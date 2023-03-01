swiper 라이브러리 사용.
"swiper": "^9.0.3",


🎈 3초마다 화면이 전환되는 자동 슬라이드
  - 마지막 화면 후 첫 번째 화면으로 전환되는 무한 루프

--------------------------------------------------------------------

🎈 좌우 버튼을 누르면 움직이는 슬라이드
  - 한 번에 4개씩 보여주며 화살표 클릭 시 1개씩 이동
  - 해시태그 div는 컴포넌트로 따로 만들어두고 import 해와서 map 돌림
   
   🎡 npm start 🎡
   
   ![1](https://user-images.githubusercontent.com/105581499/218750989-b3ba7c55-86a0-484b-8245-b73424ec5e78.png)

   
swiper 사이트 : https://swiperjs.com/react

--------------------------------------------------------------------

🎈 버튼 누르면 좌우로 움직이는 슬라이드
   - 해시태그 글자 길이에 따라 너비가 변함
   - 처음 부분과 마지막 부분에서는 더 이상 움직이지 않도록 함
   - hashtagSlide.js, hash.js, hashStyle.js 참고

--------------------------------------------------------------------

🎈 swiper 라이브러리 사용해서 만든 무한 슬라이드
    - 좌우 버튼 누르면 3개씩 넘어감
    - 해시태그 글자 길이에 따라 너비 바뀜
    - 계속 반복되도록 무한
    
 ps. slidePerView={"auto"}로 했는데 하나씩밖에 안 보이고 그렇다고 숫자로 지정하면 글자가 길어지는 경우 겹치거나 해시태그 사이 여백이 이상해지는 현상 발생.
     슬라이드를 감싸는 css에 .swiper-slide {width: auto;} 이거 추가하니까 auto 잘 먹혀서 문제 해결.
        
  🎡 npm start 🎡
    
  ![2222](https://user-images.githubusercontent.com/105581499/222095000-dbc9ebc9-2f00-4dbc-be1a-4b339d55c0e6.png)
