<h1>TODOアプリを作り、Reactを学ぶ</h1>

・コンポーネント管理
・useStateによる状態管理
　state管理は可変値、propsは不変値

<h2>App.js</h2>
コンポーネント管理
State管理

<h2>Title.jsx</h2>
タイトル表示

<h2>InputForm.jsx</h2>
<h3>handleSubmit関数でフォームを送信した時に新しいタスクを taskList に追加する</h3>
1.e.preventDefaultでページリロードを防ぐ
2.setTaskListを使って、新しいタスクをtaskListに追加する。
    ・スプレッド構文を用いて、既存のタスクリストを保持しつつ、新しいタスクオブジェクトをそ　の後に追加。
    ・新しいタスクにはidをtaskList.lengthで設定。textにはinputTextでユーザーが入力した　テキストを設定
3.新しいタスクが追加された後に、setInputText("")で空にする。

<h3>handleChange関数ではユーザーが入力した内容をinputText状態に更新する</h3>
1.e.target.valueでユーザーが入力したテキストを値として取得。これをsetInputTextを使ってinputTextに設定


<h2>TodoList.jsx</h2>
<h3>handleDone関数では完了したタスクをcompletedプロパティとして設定し取り消し線を付ける</h3>
1.taskListをmapメソッドを使い、タスクのidと一致するタスクを探す。completedプロパティと一致したらtrue(完了)とfalse(未完成)を反転させる。

<h3>handleDelete関数では指定されたidを持つタスクをリストから削除する</h3>
1.引数のidは削除したいid
2.setTaskList関数ではtaskListの状態を更新する。このsetTaskList関数を呼びだすことで状態が更新される
3.filterメソッドでtaskList配列の中からtask.idとidが異なるタスクを新しい配列として作る。
    ・task.id !== idという条件文ではタスクのidが引数のidと一致しない場合はtrue(完了)を返す。条件に一致したタスクのみが新しい配列に残る。
    新しい配列はsetTaskListに渡される

