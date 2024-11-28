// 現在のメモを表示
// HTMLファイルの中にある'history'というidを持つ<div>要素を取得して、
// その内容（innerHTML）にgetMemo()の戻り値を代入します。
const history = document.getElementById('history');
history.innerHTML = getMemo();

// ローカルストレージからメモを取得する関数
function getMemo() {
    // 'memo'というキーで保存した値をローカルストレージから取得
    let memo = localStorage.getItem('memo');
    // 値をまだ保存していないときは memo に null が入っているため
    // その場合は空文字列""を返します。
    if (memo === null) memo = '';
    // そうでなければ、取得した値をそのまま返します。
    return memo;   
}

// 'inputField'というidを持つ<input>要素を取得します。
// これは入力欄です。
const inputField = document.getElementById('inputField');
// 入力欄へ文字が入力されたときなど、
// その内容が変更されたときに、changeイベントが発生します。
// 次のようにaddEventListener('change', function(){ ... }) と書くと、
// changeイベントが発生したときには、
// function() { ... } の中の処理が実行されるようになります。
inputField.addEventListener('change', function() {
    // まず、これまでのメモの内容を取得します。
    let oldMemo = getMemo();

    // 現在の入力欄の内容（文字列）を取得します。
    const text = inputField.value;
    
    // 新しいメモは、これまでのメモの内容に、
    // 現在の入力欄の内容を追加したものとします。
    // 末尾には改行のためのHTML要素 <br />を追加しておきます。
    const newMemo = oldMemo + text + '<br />';

    // 新しいメモを、ローカルストレージに保存します。
    // 'memo'というキーで保存します。
    // キーはどんな名前でも構いませんが、ここでは'memo'という名前にしています。
    localStorage.setItem('memo', newMemo);

    // 新しいメモを画面上に表示します。
    history.innerHTML = newMemo;

    // 入力欄に空文字列''を代入して、入力欄を空にします。
    inputField.value = '';
});

// 'resetButton'というidを持つ<button>要素を取得します。
const resetButton = document.getElementById('resetButton');
// ボタンをクリックしたときに、function() { ... } の中の処理が実行されます。
resetButton.addEventListener('click', function() {
  // これまでのメモをすべて削除するには、
  // 'memo'というキーで保存した値をローカルストレージから削除します。
  localStorage.removeItem('memo');

  // 画面上のメモも空にします。
  history.innerHTML = '';

  // （これは参考のためのコードです）
  // あらゆるキーで保存された値をローカルストレージから一気に削除する場合
  // localStorage.clear();
});


// LocalStorageの詳細な解説ページはこちら。
// https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
