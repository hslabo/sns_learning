// イントロ会話データ
const conversationData = [
    { character: 'satoko', text: 'りいなちゃん、この間教えてくれた『SNS』って、やっぱりよく分からないんだけど…。' },
    { character: 'riina', text: 'おばあちゃん、どうしたの？' },
    { character: 'riina', text: 'SNSはね、<strong>「インターネット上にある、大きな交流会館」</strong>みたいなものだよ！' },
    { character: 'satoko', text: '交流会館？' },
    { character: 'riina', text: 'うん！その会館の中には、「お花好きの部屋」とか「手芸好きの部屋」とか、いろんな趣味のサークル部屋がたくさんあるの。' },
    { character: 'riina', text: 'そこで自分の育てたお花の写真をみんなに見せたり、他の人の素敵な作品を見て「いいね！」って拍手したりできる場所なんだよ。' },
    { character: 'satoko', text: 'まあ、じゃあ遠くに住んでいるお友達とも、お花の写真を見せ合ったりできるのかしら？' },
    { character: 'riina', text: 'もちろん！それに、日本中、ううん、世界中の同じ趣味の人とも繋がれちゃうんだよ。すごいでしょう？✨' },
    { character: 'satoko', text: 'それは楽しそうねぇ。でも、なんだか難しそうだし、知らない人と話すのは少し怖いわ…。' },
    { character: 'riina', text: '大丈夫！👍' },
    { character: 'riina', text: '確かに、気をつけなきゃいけないこともあるけど、それは町を歩くときに交通ルールを守るのと同じ。' },
    { character: 'riina', text: 'だから、まずはおばあちゃんと私で、安全な歩き方を練習してみない？' },
    { character: 'satoko', text: '練習？' },
    { character: 'riina', text: 'うん！私が作った練習用のシミュレーターがあるの。これなら失敗しても大丈夫だから、安心して色々試せるよ！' },
    { character: 'satoko', text: 'まあ、りいなちゃんが作ったの？それなら安心ね。ぜひやってみたいわ！' }
];


// 問題データ
const quizData = [
    {
        question: "まずは自分の『名前』を登録するんですね。本名がいいのか、それとも何か別の名前がいいのか、どうでしょう？",
        options: ["山田 花子", "ガーデニング好き はな", "メールアドレスを名前にする"],
        answer: 1,
        story: {
            0: "本名で登録すると、他の情報と結びついて個人が特定される危険があります。少し不安ですね。",
            1: "ニックネームで登録。本名を知られずに安心して楽しめそうですね。",
            2: "メールアドレスは最も大事な個人情報の一つです。絶対に公開してはいけません。"
        },
        explanation: "本名やメールアドレスを名前にすると、個人が特定されたり、迷惑メールが届いたりする危険があります。ニックネームを使うのが安全の第一歩です。"
    },
    {
        question: "次は顔写真ですね。自分の顔を出すのは、なんだか少し照れくさい気もします。",
        options: ["自分の免許証の写真", "きれいに咲いたお庭の花の写真", "自分の顔がはっきり写っている写真"],
        answer: 1,
        story: {
            0: "免許証には、住所、氏名、生年月日など個人情報の塊です。絶対に載せてはいけません！",
            1: "お庭の花の写真にしたら、『素敵ですね』とコメントが。これなら安心して使えそうです。",
            2: "顔写真を登録したら、昔の知り合いからたくさん連絡が来てびっくり！中にはよく知らない人も…。"
        },
        explanation: "免許証などの身分証明書を載せるのは大変危険です。顔写真も悪用される危険性があるため、ペットやお花など、個人情報を含まない写真がおすすめです。"
    },
    {
        question: "初めての投稿！この間のバス旅行、楽しかったですよね。どの写真を載せましょうか。",
        options: ["バスの前で撮った、自分とバスの行き先表示が写っている写真", "旅行先で食べた、美味しそうなお昼ご飯の写真", "自宅前で、旅行カバンと一緒に出発前の写真"],
        answer: 1,
        story: {
            0: "バスの行き先が写った写真を投稿したら、近所の人から『〇〇旅行センターのバスツアーでしたか』と言われて、行動が見られているようでドキッとしました。",
            1: "お昼ご飯の写真に『美味しそう！』とコメントが。個人の情報は伝わらずに、楽しかった思い出を共有できます。",
            2: "自宅の外観が写った写真を載せると、家の場所が特定される危険があります。とても危ないですね。"
        },
        explanation: "写真には、思わぬ情報が写り込んでいることがあります。投稿する前に、自宅の場所や個人情報が分かるものが写っていないか確認するクセをつけましょう。"
    },
    {
        question: "今度は文章ですね。『来週から孫とハワイ旅行！楽しみだわ〜』なんて書いたら、みんな羨ましがるかもしれませんね。",
        options: ["『ハワイ旅行から帰ってきました！最高の思い出です』と書く", "『来週から一週間、ハワイ旅行で家を留守にします！』と書く", "『航空券の予約番号はこれ！準備万端！』と投稿する"],
        answer: 0,
        story: {
            0: "帰ってきてから投稿。これなら安心して思い出を報告できますね。",
            1: "留守にすると投稿したら、空き巣に入られないか急に心配になってしまいました…。",
            2: "予約番号は他人に知られてはいけない大事な情報です。悪用される危険があります。"
        },
        explanation: "家を留守にするといった情報をリアルタイムで発信するのは危険です。旅行などの報告は、帰ってきてからが安全です。"
    },
    {
        question: "投稿に『#（ハッシュタグ）』を付けると、同じ趣味の人に見てもらいやすいんですって。お庭の花の投稿に、どれを付けましょうか。",
        options: ["写真と関係する言葉をいくつか付ける（#ガーデニング など）", "自分の名前を付ける（#山田花子）", "写真と関係ないけど、人気の言葉をたくさん付ける（#お得情報 など）"],
        answer: 0,
        story: {
            0: "ガーデニング好きの方から『綺麗ですね！』とコメントが。同じ趣味の人と繋がれそうです。",
            1: "自分の名前を付けても、他の人がその言葉で検索する可能性は低いかもしれませんね。",
            2: "関係ない言葉を付けたら、投稿と関係ないコメントばかり来てしまいました…。"
        },
        explanation: "ハッシュタグは、投稿の内容に関係のある言葉を付けるのがマナーです。同じ興味を持つ人と繋がるための、便利な機能なんですよ。"
    },
    {
        question: "スマホの設定で『写真に撮影場所の情報を記録しますか？』と出てきました。便利な機能みたいですけど、どうしたものでしょう。",
        options: ["自宅の場所が知られるのは不安だから「オフ」にする", "便利そうだから「オン」にする", "わからないから、そのままにしておく"],
        answer: 0,
        story: {
            0: "オフに設定。これで、うっかり自宅の場所を知られる心配がなくて安心です。",
            1: "自宅で撮った写真に位置情報が付いていて、知らない人に家の場所がバレてしまう可能性が…。",
            2: "そのままにすると、設定がオンになっている場合があります。自分でオフに設定するのが一番安全です。"
        },
        explanation: "写真の位置情報は、自宅などの場所を特定される危険があります。基本的にはオフにしておくことをお勧めします。"
    },
    {
        question: "あら、『高橋』さんという知らない方から『友達になりませんか？』と連絡が来ました。どうしましょうか…。",
        options: ["知らない人なので、いったん「無視」して様子を見る", "友達は多い方が楽しそうだから、すぐに「承認」する", "『どちらの高橋さんですか？』とメッセージを送る"],
        answer: 0,
        story: {
            0: "無視して正解。知らない人からの申請は、詐欺や迷惑行為の始まりかもしれません。",
            1: "承認したら、すぐに怪しい広告のメッセージがたくさん送られてきました…。",
            2: "返事をすることで、このアカウントが使われていると相手に教えてしまいます。反応しないのが一番です。"
        },
        explanation: "SNSでは、知らない人からの友達申請は慎重に。本当に知り合いかどうか、よく確認してからにしましょう。"
    },
    {
        question: "この間のカラオケ大会で、お友達の鈴木さんが熱唱している写真、すごく良く撮れたんです。投稿してみようかな。",
        options: ["『この写真、投稿してもいいですか？』と、まず鈴木さんに聞いてみる", "面白い写真だから、鈴木さんに何も言わずに投稿する", "顔の部分だけスタンプで隠して投稿する"],
        answer: 0,
        story: {
            0: "聞いてみたら、鈴木さんも喜んで許可してくれました。お互い気持ちよく楽しめますね。",
            1: "勝手に投稿したら、後で鈴木さんから『恥ずかしいからやめてほしかった』と言われてしまいました。",
            2: "顔を隠しても、服装や場所で誰だか分かってしまうことも。やはり本人に許可を取るのが一番です。"
        },
        explanation: "自分以外の人が写っている写真を投稿する時は、必ずその人の許可をもらうのがマナーです。プライバシーを守る上でとても大切なことです。"
    },
    {
        question: "お友達の投稿に、つい自分の意見を言いたくなる時ってありますよね。ちょっと気になることを書いているみたいですけど…。",
        options: ["色々な考えがあると思い、今回はコメントしないでおく", "『あなたの考えは間違っていると思います』と、はっきり意見を書く", "『私はこう思います！』と、長文で自分の意見を主張する"],
        answer: 0,
        story: {
            0: "コメントしなかったことで、余計なトラブルを避けられました。SNSでは色々な考えの人がいますからね。",
            1: "はっきり意見を書いたら、相手の気分を害してしまい、気まずい雰囲気に…。",
            2: "SNSは意見交換の場でもありますが、一方的な主張は相手を疲れさせてしまうかもしれません。"
        },
        explanation: "顔が見えないSNSでは、文章の受け取られ方で誤解が生まれやすいものです。相手を否定するようなコメントは、トラブルの元になりかねません。"
    },
    {
        question: "まあ、私の投稿に『つまらない』なんてコメントが付いてしまいました。なんだか悲しい気持ちになりますね…。",
        options: ["反応せず、そっとコメントを削除するか、運営に報告する", "腹が立つから「あなたに何が分かるんですか！」と言い返す", "「そうですよね、すみません」と謝ってしまう"],
        answer: 0,
        story: {
            0: "そっと削除したら、気分もスッキリ。嫌なコメントは相手にしないのが一番です。",
            1: "言い返したら、さらにひどい言葉が返ってきて、もっと嫌な気持ちになってしまいました。",
            2: "あなたは何も悪いことをしていません。心ない言葉に、謝る必要は全くありませんよ。"
        },
        explanation: "嫌なコメントに反応すると、相手を喜ばせるだけです。反応せずに削除したり、あまりにひどい場合は運営に通報機能を使いましょう。"
    },
    {
        question: "大変です！『おめでとうございます！現金100万円が当選しました！』とメッセージが届きました！",
        options: ["そんなうまい話はありませんよね。メッセージごと削除する", "もしかしたら本当かも？書かれているリンク（URL）を押してみる", "『ありがとう！』と感謝の返事をする"],
        answer: 0,
        story: {
            0: "メッセージを削除して、被害を未然に防げました。うまい話には裏があるものです。",
            1: "リンクを押したら、個人情報を入力する画面に。これは危ない、と慌てて閉じました。",
            2: "返事をすると、このアカウントが使われていると相手に伝わってしまい、さらにメッセージが来るかもしれません。"
        },
        explanation: "これは典型的な詐欺の手口です。このようなメッセージのリンクは絶対に押さず、すぐに削除してください。"
    },
    {
        question: "『この野菜を食べれば、どんな病気も治る！』という記事を見つけました。これはすごい！すぐに友達にも教えてあげないと！",
        options: ["本当かな？と、シェアする前に一度立ち止まって考える", "すぐに「シェア」ボタンを押して、みんなに知らせる", "信じられないけど、面白いからシェアする"],
        answer: 0,
        story: {
            0: "一度立ち止まって考えたおかげで、間違った情報を広めずに済みました。",
            1: "シェアしたら、後で娘に『それ、デマ情報だよ』と教えられました。恥ずかしい思いをしました。",
            2: "面白いと思っても、間違った情報を広めるのは他の人の迷惑になります。やめておきましょう。"
        },
        explanation: "SNSには、嘘の情報（デマ）がたくさん流れています。誰かに教える前には、本当に信頼できる情報か、一度調べてみるのが大切です。"
    },
    {
        question: "有名なブランドのバッグが『本日限定90%オフ！』という広告が出てきました。信じられないくらい安いですね。",
        options: ["安すぎて少し怪しい。詐欺かもしれないので、今回は見送る", "こんな機会は二度とないから、急いで広告先のサイトで注文する", "『これは本物ですか？』と広告にコメントしてみる"],
        answer: 0,
        story: {
            0: "見送って正解。後で調べたら、それは偽物の商品を売る詐欺サイトだったようです。",
            1: "注文したのに、商品はいつまで経っても届かず、お金だけ取られてしまいました…。",
            2: "詐欺業者が正直に「偽物です」と答えることはありません。コメントしても意味はないでしょう。"
        },
        explanation: "極端に安い価格をうたう広告は、詐欺サイトの可能性があります。すぐに飛びつかず、信頼できるサイトかどうか確認しましょう。"
    },
    {
        question: "SNSのメッセージで仲良くなった方から、『もっとお話ししたいので、電話番号を教えてくれませんか？』と聞かれました。",
        options: ["相手が誰か確信が持てないので、個人情報は教えない", "親しくなったし、教えても大丈夫だろう", "自分の電話番号は怖いから、相手の番号を聞き出す"],
        answer: 0,
        story: {
            0: "断って正解。SNSで知り合った相手に、安易に個人情報を教えるのはとても危険です。",
            1: "教えてしまったら、知らない番号から迷惑な電話がかかってくるようになってしまいました。",
            2: "相手の情報を聞き出そうとするのもトラブルの元です。関わらないのが一番です。"
        },
        explanation: "電話番号や住所、本名などの個人情報は、SNSで絶対に教えてはいけません。どんなに親しくなったと思っても、慎重に行動しましょう。"
    },
    {
        question: "SNSで知り合った人に「会いませんか？」と誘われたら",
        options: ["『ありがとうございます。でも、直接お会いするのは慎重に考えさせてください』と丁寧に断る", "話が合いそうだから、『ぜひ！』とすぐに約束する", "自分の家の最寄り駅を指定して「ここでなら」と返事する"],
        answer: 0,
        story: {
            0: "丁寧にお断り。SNSは画面の向こうにいる相手のことが分かりません。直接会うのはとても危険です。",
            1: "会う約束をしてしまったけれど、どんな人が来るのか分からず、だんだん怖くなってきました。",
            2: "自分の生活圏を教えてしまうのは大変危険です。絶対にやめましょう。"
        },
        explanation: "SNSで知り合った人と、安易に会う約束をするのは絶対にやめましょう。トラブルに巻き込まれる危険が非常に高いです。"
    }
];


// DOM要素の取得
const introScreen = document.getElementById('intro-screen');
const chatWindow = document.getElementById('chat-window');
const introNextButton = document.getElementById('intro-next-button');
const clickGuide = document.getElementById('click-guide');

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const finalScreen = document.getElementById('final-screen');

const nameInput = document.getElementById('name-input');
const nameSubmitButton = document.getElementById('name-submit-button');
const nameEntrySection = document.getElementById('name-entry-section');
const welcomeSection = document.getElementById('welcome-section');
const userNameDisplay = document.getElementById('user-name-display');
const startButton = document.getElementById('start-button');

const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumberEl = document.getElementById('question-number');

const modal = document.getElementById('result-modal');
const resultTitle = document.getElementById('result-title');
const resultStory = document.getElementById('result-story');
const resultExplanation = document.getElementById('result-explanation');
const nextButton = document.getElementById('next-button');
const resultSatokoImage = document.getElementById('result-satoko-image');

let currentQuestionIndex = 0;
let score = 0;
let currentMessageIndex = 0;

// イベントリスナー
document.addEventListener('DOMContentLoaded', showNextMessage);
chatWindow.addEventListener('click', showNextMessage);
introNextButton.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});

nameSubmitButton.addEventListener('click', setUserName);
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
nextButton.addEventListener('click', nextQuestion);


// イントロ会話を表示する関数
function showNextMessage() {
    if (currentMessageIndex === 1 && !clickGuide.classList.contains('hidden')) {
        clickGuide.classList.add('hidden');
    }

    if (currentMessageIndex >= conversationData.length) {
        chatWindow.removeEventListener('click', showNextMessage);
        introNextButton.classList.remove('hidden');
        return;
    }

    const message = conversationData[currentMessageIndex];
    let messageHtml = '';

    if (message.character === 'riina') {
        messageHtml = `
            <div class="chat-message riina">
                <img src="riina.png" alt="りいな" class="chat-icon">
                <div class="riina-content">
                    <div class="chat-user-name">RiiNA🌟</div>
                    <div class="chat-bubble">
                        ${message.text}
                    </div>
                </div>
            </div>
        `;
    } else {
        messageHtml = `
            <div class="chat-message satoko">
                <div class="chat-bubble">
                    ${message.text}
                </div>
            </div>
        `;
    }

    chatWindow.insertAdjacentHTML('beforeend', messageHtml);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    currentMessageIndex++;
}


// 名前の設定
function setUserName() {
    const userName = nameInput.value.trim();
    if (userName === "") {
        alert("お名前（ニックネーム）を入力してください。");
        return;
    }

    userNameDisplay.textContent = userName;
    nameEntrySection.classList.add('hidden');
    welcomeSection.classList.remove('hidden');
}

// ゲーム開始
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add('hidden');
    finalScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

// ゲームの再スタート
function restartGame() {
    finalScreen.classList.add('hidden');
    introScreen.classList.remove('hidden');
    
    currentMessageIndex = 0;
    chatWindow.innerHTML = '';
    showNextMessage();
    chatWindow.addEventListener('click', showNextMessage);
    introNextButton.classList.add('hidden');
    clickGuide.classList.remove('hidden');
    
    nameEntrySection.classList.remove('hidden');
    welcomeSection.classList.add('hidden');
    nameInput.value = '';
}


// 問題表示
function showQuestion() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.innerHTML = `<div id="progress-bar-inner" style="width: ${progress}%"></div>`;
    
    questionNumberEl.textContent = `第 ${currentQuestionIndex + 1} 問`;

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    let shuffledOptions = currentQuestion.options.map((optionText, index) => {
        return { text: optionText, originalIndex: index };
    });

    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    shuffledOptions.forEach((optionData, displayIndex) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        const label = String.fromCharCode(65 + displayIndex);
        button.innerHTML = `<span class="option-label">${label}</span> ${optionData.text}`;
        button.addEventListener('click', () => selectOption(optionData.originalIndex, optionData.text));
        optionsContainer.appendChild(button);
    });
}

// 選択肢を選択
function selectOption(originalIndex, selectedText) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = originalIndex === currentQuestion.answer;

    if (isCorrect) {
        score++;
        resultTitle.textContent = "そうですね！";
        resultSatokoImage.src = "smile_satoko.png";
        resultSatokoImage.alt = "さとこさん（笑顔）";
    } else {
        resultTitle.textContent = "あらら…";
        resultSatokoImage.src = "shock_satoko.png";
        resultSatokoImage.alt = "さとこさん（不安）";
    }
    
    resultStory.innerHTML = `<p><strong>【もし、「${selectedText}」 を選んだら…】</strong></p><p>${currentQuestion.story[originalIndex]}</p>`;
    resultExplanation.textContent = currentQuestion.explanation;
    modal.classList.remove('hidden');
}


// 次の問題へ
function nextQuestion() {
    modal.classList.add('hidden');
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

// 最終結果表示
function showFinalResult() {
    quizScreen.classList.add('hidden');
    finalScreen.classList.remove('hidden');

    const finalRank = document.getElementById('final-rank');
    const finalScore = document.getElementById('final-score');
    const finalMessage = document.getElementById('final-message');

    finalScore.textContent = `あなたの正解数は ${quizData.length} 問中 ${score} 問でした！`;

    if (score >= 13) {
        finalRank.textContent = "あなたのあんしんSNS度は【名人級】です！";
        finalMessage.textContent = "お見事です！もうすっかりSNSを使いこなしていますね。自信を持って、これからも安全に楽しんでください。";
    } else if (score >= 8) {
        finalRank.textContent = "あなたのあんしんSNS度は【あと一歩で名人級】です！";
        finalMessage.textContent = "なかなかの腕前ですね！間違えてしまったところだけ、もう一度確認しておくと、もっと安心して楽しめますよ。";
    } else {
        finalRank.textContent = "あなたのあんしんSNS度は【のんびり練習中】です！";
        finalMessage.textContent = "大丈夫、誰でも最初は分からないことだらけです。このシミュレーターで繰り返し練習すれば、きっと安全に使えるようになりますよ！";
    }
}