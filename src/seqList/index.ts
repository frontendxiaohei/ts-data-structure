class SeqList<T> {
  private data: T[] = [];
  private length: number = 0;
  constructor(length: number) {
    this.length = length;
  }

  insertByIdx(i: number, item: T) : boolean {
    if(i < 0) {
        throw new Error("插入位置不合法");
    } else {
        // this.data[i] = item;
        for(let j = this.length;j >= i;j--) {
            this.data[j] = this.data[j - 1];
        }
        this.data[i] = item;
        this.length++;
        return true;
    }
  } 
  delByIdx(i: number) : boolean {
    if(i < 0) {
        throw new Error("删除位置不合法");
    } else {
        for(let j = i;j < this.length;j++) {
            this.data[j] = this.data[j + 1];
        }
        this.length--;
        return true;
    }
  }
  getElem(i : number) : T {
    return this.data[i];
  }
  print() : void {
    console.log(this.data)
  }

  reverse() : void {
    let i = 0;
    let j = this.length - 1;
    while(i < j) {
        // let temp = this.data[i];
        // this.data[i] = this.data[j];
        // this.data[j] = temp;
        [this.data[i],this.data[j]] = [this.data[j],this.data[i]];
        i++;
        j--;
    }
  }
}


let seq = new SeqList<number>(4);
seq.insertByIdx(0,1);
seq.insertByIdx(1,2);
seq.insertByIdx(2,3);
seq.insertByIdx(3,4);
seq.insertByIdx(4,5);
seq.insertByIdx(5,10);
seq.insertByIdx(6,10);


seq.print();

// seq.reverse();

seq.print();


console.log(seq.getElem(1));



