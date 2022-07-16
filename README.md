## 과제 제출

-  이름 : 박세명
-  포지션 : Backend Node.js 포지션

### 아키텍쳐

-  프레임워크 : Nest.js, Json
-  데이터베이스 : MariaDB
-  에러처리 :
-  testcode 및 swagger
<!-- * 프론트를 할까말까....  -->

 <!-- * 만약 프론트를 하게된다면
 * vite로 간단하게 만들어서 해야겠다.  -->

### 데이터베이스 구조

```sql
orders
| id | userId |

productions
| id | type | name | description | price |

sales
| id | orderId | productId | orderedAt |

users
| id | email | name | gender |
```

### API 명세서

| 분류     | 기능                                 | 메소드 | URL                                       | 메모                                 |
| -------- | ------------------------------------ | ------ | ----------------------------------------- | ------------------------------------ |
| products | 상품조회                             | Get    | /api/products/getProducts                 | 전체 상품 목록                       |
|          | 카테고리별 조회                      | Post   | /api/products/getByCategories             | 카테고리별 상품 목록                 |
|          | 랜덤 카테고리 조회                   | Get    | /api/products/getRandomByCategories       | 랜덤 카테고리 상품 목록              |
| sales    | 성별 최고로 많이 판매된 상품 조회    | Get    | /api/sales/getBestSeller?gender=${gender} | 성별 최고로 많이 판매된 상품 조회    |
|          | 월별 판매 총액이 가장 높은 상품 조회 | Post   | /api/sales/getBestSellerByMonth           | 월별 판매 총액이 가장 높은 상품 조회 |
|          | 구매횟수가 가장 적은 회원 조회       | Get    | /api/sales/getLowestBuyer                 | 구매횟수가 가장 적은 회원 조회       |

### API 설명(작성중)

| API url       | endpoint              | Request Method | Request Body           |                      Status Code                      |                                 Return                                  |
| ------------- | --------------------- | :------------: | ---------------------- | :---------------------------------------------------: | :---------------------------------------------------------------------: |
| /api/products | getProducts           |      Get       |                        | `201 ok`<br /> `400 Bad Request` <br /> `409 Conflct` | `{ "ok" :true, "data" : [{id : nuber, type: string, name: string, description: string, price: number}] }` <br /> `{ok: false, "message": "string"}` |
| /api/products | getByCategories       |      Post      | `{ "type" : "string"}` |  `201 ok`<br /> `400 Bad Request`<br />`409 Conflct`  |       `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`        |
| /api/products | getRandomByCategories |      Get       |                        | `201 ok`<br /> `400 Bad Request` <br /> `409 Conflct` |       `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`        |
| /api/sales    | getBestSeller         |      Get       |                        | `201 ok`<br /> `400 Bad Request` <br /> `409 Conflct` |       `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`        |
| /api/sales    | getBestSellerByMonth  |      Post      |                        | `201 ok`<br /> `400 Bad Request` <br /> `409 Conflct` |       `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`        |
| /api/sales    | getLowestBuyer        |      Get       |                        | `201 ok`<br /> `400 Bad Request` <br /> `409 Conflct` |       `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`        |

### **두 번째**

-  전체 상품 목록을 얻을 수 있습니다.

   -  **Get 으로 상품 목록을 받을 수 있다.**

-  특정 카테고리별로 상품을 얻을 수 있습니다. (type으로 항목을 식별합니다.)

   -  **Post 으로 카테고리별 상품 목록을 받을 수 있다.**

-  각 카테고리별 상품을 1가지씩 랜덤으로 얻을 수 있습니다. (각 상품은 객체에 담아 보내주세요.)

   -  **각 카테고리별 상품을 한개씩 가져와서 API로 뿌려 준다.**

-  판매된 상품들 중 여성(female) 회원에게 판매된 횟수가 가장 많은 상품의 이름을 얻을 수 있습니다.

   -  **male or femail로 구별하여 가장 많이 판매된 상품을 가져온다.**

-  3월 판매 총액이 가장 높은 상품을 얻을 수 있습니다. (상품은 객체에 담아 보내주세요.)

   -  **월별로 가져올수 있게끔 api를 작성**

-  구매 횟수가 가장 적은 회원과, 구매 총액이 가장 높은 회원의 이름을 각각 얻을 수 있습니다. (두 가지 조건에 해당하는 회원이 동일한 회원이라면, 해당 회원의 이름을 보내주세요.)
   -  **이건 typeorm 에서 해결**

### **마지막**

> -  테스트를 진행하시면서 개선되어야 할 점이 무엇이라고 생각하시나요?

> -  테스트를 진행하시면서 어떤 부분이 가장 까다로우셨나요?

**TypeOrm 버전업으로 인한 entityRepository 삭제**

-  typeorm 0.3.7로 업데이트 되면서 기존에 알고 있던 @entityRespository가 사용이 안되어 다른 방법으로 해야 하는 방법이 생겼습니다.
-  이에 따라 두가지 방법으로 진행 할 수있는데
   1. 기존 버전을 이용해 빠르게 구현하는 방법 npm i @nestjs/typeorm@^8.0.3 typeorm@^0.2.45
   2. 새로운 버전을 이용해 커스텀 데코레이터를 이용하여 구현하는 방법이 있습니다.
      "@nestjs/common": "^9.0.3",
      typeorm ^0.2.45,

시간이 없으니 원하는 MPV까지 빠르게 구현을 하고 이 버전 업데이트에 관련된 부분에 대해서는 직접 해결

> -  테스트 코드에서 가장 자신있는 부분은 어디인가요?
