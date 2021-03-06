// 기본적인 class 선언하기
class ItemList {
  constructor(private readonly name: string, protected items: string[]) {
    this.name = name
    this.items = items
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


// class 상속하기, extends를 통해 상속.
class RecommendedItemList extends ItemList {
  private bestItem: string

  // get키워드로 private한 속성에 대한 getter함수를 만들 수 있다.
  get mostRecommendedItem() {
    if (this.bestItem) {
      return this.bestItem
    } else {
      throw new Error('No BestItem')
    }
  }

  // set키워드로 private키워드로 선언된 속성을 변경하는 setter함수를 정의할 수 있다.
  set mostRecommendedItem(value: string){
    this.bestItem = value
  }

  constructor(items: string[], public likes: number[], bestItem: string) {
    // 상속받는 기본 클래스의 생성자를 호출하는 메서드
    super('Recommend', items)
    this.likes = likes
    this.bestItem = bestItem
  }
}

const myRecommendItemList = new RecommendedItemList(['item4', 'item5', 'item6'], [4, 5, 6], 'best')
console.log(myRecommendItemList)
myRecommendItemList.consoleItemsNum()
// getter함수의 사용방법
console.log(myRecommendItemList.mostRecommendedItem)
// setter함수의 사용방법
myRecommendItemList.mostRecommendedItem = 'New Best Item'
console.log(myRecommendItemList.mostRecommendedItem)
