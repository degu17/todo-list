const createIncompleteTodo = (todo) => {
    const li = document.createElement("li");
    //liタグを作成する

    const div = document.createElement("div");
    div.className = "list-row";
    //divタグを作成する

    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;
    //pタグを作成する

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 完了ボタンの親のliタグを取得
        const completeTarget = completeButton.closest("li");
        
        // 完了リストに追加する前に、現在のリストから削除
        document.getElementById("incomplete-list").removeChild(completeTarget);
        
        // ボタンを削除
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        
        // 戻すボタンを作成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        
        // 戻すボタンを押したら未完了リストに追加
        backButton.addEventListener("click", () => {
        //todoを受け取る
        const todoText = backButton.previousElementSibling.innerText;
        createIncompleteTodo(todoText);
        //完了リストから削除
        document.getElementById("complete-list").removeChild(completeTarget);
        });
        
         
        // 戻すボタンを追加
        completeTarget.firstElementChild.appendChild(backButton);
        
        // 完了リストに追加
        document.getElementById("complete-list").appendChild(completeTarget);
    });
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //削除ボタンを押したらliタグを削除する
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list")
                .removeChild(deleteTarget);

    });

    //divタグの子要素にpタグを追加する
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    //liタグの子要素にdivタグを追加する
    li.appendChild(div);

    //未完了のリストに追加する
    document.getElementById("incomplete-list").appendChild(li);

    console.log(li);
    };

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    //テキストボックスを入力・初期化する
    createIncompleteTodo(inputText);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
