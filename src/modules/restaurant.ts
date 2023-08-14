export type Restaurant = {
  name: string;
  category: string;
  address: { city: string; detail: string; zipCode: number };
  menu: { name: string; price: number; category: string }[];
};
//  *menu 뒤에 배열:menu라는 객체의 배열이라는 타입지정

export type Address = { city: string; detail: string; zipCode: number };
export type Menu = { name: string; price: number; category: string };

export type AddressWithoutZip = Omit<Address, "zipCode">;

export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};
//제네릭은 내가 어떤 데이터의 타입이 들어올지 모를 떄 사용(임의의 T)
// =>data에 ApiResponse의 제네릭 T를 사용하면 = ApiResponse를 쓸때에 T를 제네릭으로 넣어주면
// 개(ApiResponse)의 타입이 data의 타입으로 지정된다
// ex) export type RestaurantResponse = ApiResponse<Restaurant>
//     export type MenuResponse = ApiResponse<Menu>
