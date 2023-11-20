const json = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];
function JSONtoLinkedList(json) {
  const dummyHead = { next: null };
  let current = dummyHead;

  // Проходим по каждому объекту в JSON и создаем узел списка
  for (let obj of json) {
    current.next = { value: obj.value, next: null };
    current = current.next;
  }

  return dummyHead.next; // Возвращаем настоящую голову связного списка
}

const linkedList = JSONtoLinkedList(json);
console.log(linkedList);
