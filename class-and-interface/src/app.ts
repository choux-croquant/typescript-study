class ItemList {
  constructor(private name: string, private items: string[]) {
    this.name = name;
    this.items = []
  }
  // this에 더미 타입을 추가하는 것을 통해 외부에서 유사한 객체가 존재할 때 발생할 수 있는 에러에 대해 어느정도 대책을 세울 수 있다.
  consoleListName(this: ItemList) {
    console.log('ListName: ' + this.name)
  }

  addItem(item: string) {
    this.items.push(item)
  }

  consoleItemsNum() {
    console.log(this.items.length)
    console.log(this.items)
  }
}

const myFirstItemList = new ItemList('FirstItemList', [])

const someItemList = { consoleListName: myFirstItemList.consoleListName }

myFirstItemList.consoleListName()
// this에 타입을 지정하지 않았다면 아래의 consoleListName()메서드는 정상적으로 동작하는 것 처럼 보인다.
// 현재는 name속성도 추가하여 ItemList의 형식과 동일하게 만들어주어야 동작한다.
// someItemList.consoleListName()

myFirstItemList.addItem('item1')
myFirstItemList.addItem('item2')
myFirstItemList.addItem('item3')

myFirstItemList.consoleItemsNum()