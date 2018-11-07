import wepy from 'wepy';

export function getList(offset, success){
  wepy.request({
    url:`https://mainsite-restapi.ele.me/pizza/v3/restaurants?offset=${offset}&limit=20&latitude=40.040903&longitude=116.297917&extras=%5B%22activities%22%5D&extra_filters=home&keyword=&order_by=0&terminal=weapp&user_id=356827514`,
    success
  })
}
