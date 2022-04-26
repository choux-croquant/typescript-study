class ItemList {
  name: string

  constructor(n: string) {
    this.name = n;
  }
}

const myFirstItemList = new ItemList('FirstItemList')

console.log(myFirstItemList)