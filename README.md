## 과제 제출

-  이름 : 박세명
-  포지션 : Backend Node.js 포지션

### 아키텍쳐

-  프레임워크 : Nest.js
-  데이터베이스 : MariaDB, JSON

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

| 분류     | 기능                                                     | 메소드 | URL                                                  | 메모                                         |
| -------- | -------------------------------------------------------- | ------ | ---------------------------------------------------- | -------------------------------------------- |
| products | 상품조회                                                 | Get    | /api/products/getProducts                            |                                              |
|          | 카테고리별 조회                                          | Post   | /api/products/getByCategories                        |                                              |
|          | 랜덤 카테고리 조회                                       | Get    | /api/products/getRandomByCategories                  |                                              |
| sales    | 성별 최고로 많이 판매된 상품 조회                        | Get    | /api/sales/getBestSeller?gender=gender(male, female) | query                                        |
|          | 월별 판매 총액이 가장 높은 상품 조회                     | Get    | /api/sales/getBestSellerByMonth?month=number         | query                                        |
|          | 구매횟수가 가장 적은 회원과 구매 금액이 가장큰 회원 조회 | Get    | /api/sales/getLowestBuyer                            | 두 조건의 이름이 같을시 한사람의 이름만 표기 |

### API 설명(작성중)

| API url       |       endpoint        | Request Method | Request Body           |           Status Code            |                                                                       Return                                                                        |
| ------------- | :-------------------: | :------------: | ---------------------- | :------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| /api/products |      getProducts      |      Get       |                        | `201 ok`<br /> `400 Bad Request` | `{ "ok" :true, "data" : [{id : nuber, type: string, name: string, description: string, price: number}] }` <br /> `{ok: false, "message": "string"}` |
|               |    getByCategories    |      Post      | `{ "type" : "string"}` | `201 ok`<br /> `400 Bad Request  |                                             `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`                                              |
|               | getRandomByCategories |      Get       |                        | `201 ok`<br /> `400 Bad Request` |                                             `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`                                              |
| /api/sales    |     getBestSeller     |      Get       |                        | `201 ok`<br /> `400 Bad Request` |                                             `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`                                              |
|               | getBestSellerByMonth  |      Get       |                        | `201 ok`<br /> `400 Bad Request` |                                             `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`                                              |
|               |    getLowestBuyer     |      Get       |                        | `201 ok`<br /> `400 Bad Request` |                                             `{ "ok" :true }` <br /> `{ok: false, "message": "string"}`                                              |

### **기능구현 목록**

-  전체 상품 목록을 얻을 수 있습니다. [o]
-  특정 카테고리별로 상품을 얻을 수 있습니다. (type으로 항목을 식별합니다.) [o]
-  각 카테고리별 상품을 1가지씩 랜덤으로 얻을 수 있습니다. (각 상품은 객체에 담아 보내주세요.) [o]
-  판매된 상품들 중 여성(female) 회원에게 판매된 횟수가 가장 많은 상품의 이름을 얻을 수 있습니다. [o]
-  3월 판매 총액이 가장 높은 상품을 얻을 수 있습니다. (상품은 객체에 담아 보내주세요.) [o]
-  구매 횟수가 가장 적은 회원과, 구매 총액이 가장 높은 회원의 이름을 각각 얻을 수 있습니다. (두 가지 조건에 해당하는 회원이 동일한 회원이라면, 해당 회원의 이름을 보내주세요.) [o]

### **요구 질문 3문항**

> 1. **테스트를 진행하시면서 개선되어야 할 점이 무엇이라고 생각하시나요?**

      - 어느정도까지 구현을 해야 하는지 알려주시면 좋을거 같습니다.

> 2. **테스트를 진행하시면서 어떤 부분이 가장 까다로우셨나요?**

-  **TypeOrm 버전업으로 인한 entityRepository 삭제**

       -  typeorm 0.3.7로 업데이트 되면서 기존에 알고 있던 @entityRespository가 사용이 안되어 다른 방법으로 해야 하는 방법이 생겼습니다.
       -  이에 따라 두가지 방법으로 진행 할 수있는데

       1. 기존 버전을 이용해 빠르게 구현하는 방법 npm i @nestjs/typeorm@^8.0.3 typeorm@^0.2.45
       2. 새로운 버전을 이용해 커스텀 데코레이터를 이용하여 구현하는 방법이 있습니다.
          "@nestjs/common": "^9.0.3",
          typeorm ^0.2.45,
          시간이 없으니 원하는 MPV까지 빠르게 구현을 하고 이 버전 업데이트에 관련된 부분에 대해서는 직접 해결

> 3. 테스트 코드에서 가장 자신있는 부분은 어디인가요?

      -  자신있다고 할 수는 없지만, MVC 페턴으로 비지니스로직과 컨트롤러부분을 나누어 구현한 것
      -  그래도 비지니스 로직은 구현을 완료 했다는 점에 대해서 만족하고 있습니다.
      -  시간이 더 있다면 swagger, testcode, expection 까지 더 할 수 있었지만 typeorm 으로 구현 하려다가 시간을 다 썻습니다.
