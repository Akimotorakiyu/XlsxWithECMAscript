//长头发是一个很长的过程
async function 我去长头发啦() {
  // 长头发...
  // 很长时间过去了
  // 长发及腰
  console.log("长发及腰。。。");
  return;
}

async function 等你长发及腰帮你剪短() {
  await 我去长头发啦();
  // 咔嚓，咔嚓，剪短啦
  console.log("咔嚓，咔嚓，剪短啦。。。");
  return;
}

function 闲聊() {
  console.log("闲聊。。。");
}

等你长发及腰帮你剪短();
闲聊();
