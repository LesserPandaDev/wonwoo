const words = [
    { hanja: '文房四友', meaning: '문방사우' },
    { hanja: '晝耕夜讀', meaning: '주경야독' },
    { hanja: '手不釋卷', meaning: '수불석권' },
    { hanja: '是是非非', meaning: '시시비비' },
    { hanja: '起承轉結', meaning: '기승전결' },
    { hanja: '先景後情', meaning: '선경후정' },
    { hanja: '轉禍爲福', meaning: '전화위복' },
    { hanja: '天下泰平', meaning: '천하태평' },
    { hanja: '外柔內剛', meaning: '외유내강' },
    { hanja: '龍頭蛇尾', meaning: '용두사미' },
    { hanja: '牛耳讀經', meaning: '우이독경' },
    { hanja: '雨後竹筍', meaning: '우후죽순' },
    { hanja: '有口無言', meaning: '유구무언' },
    { hanja: '有名無實', meaning: '유명무실' },
    { hanja: '類類相從', meaning: '유유상종' },
    { hanja: '以心傳心', meaning: '이심전심' },
    { hanja: '人山人海', meaning: '인산인해' },
    { hanja: '一擧兩得', meaning: '일거양득' },
    { hanja: '一網打盡', meaning: '일망타진' },
    { hanja: '一魚濁水', meaning: '일어탁수' },
    { hanja: '脣亡齒寒', meaning: '순망치한' },
    { hanja: '漢詩', meaning: '한시' },
    { hanja: '換率', meaning: '환율' },
    { hanja: '離別', meaning: '이별' },
    { hanja: '時相', meaning: '시상' },
    { hanja: '設疑', meaning: '설의' },
    { hanja: '一', meaning: '일' },
    { hanja: '二', meaning: '이' },
    { hanja: '三', meaning: '삼' },
    { hanja: '四', meaning: '사' },
    { hanja: '五', meaning: '오' },
    { hanja: '六', meaning: '육' },
    { hanja: '七', meaning: '칠' },
    { hanja: '八', meaning: '팔' },
    { hanja: '九', meaning: '구' },
    { hanja: '十', meaning: '십' },
    { hanja: '百', meaning: '백' },
    { hanja: '千', meaning: '천' },
    { hanja: '萬', meaning: '만' },
    { hanja: '草', meaning: '풀 초' },
    { hanja: '木', meaning: '나무 목' },
    { hanja: '花', meaning: '꽃 화' },
    { hanja: '石', meaning: '돌 석' },
    { hanja: '山', meaning: '뫼 산' },
    { hanja: '江', meaning: '강 강' },
    { hanja: '海', meaning: '바다 해' },
    { hanja: '空', meaning: '빌 공' },
    { hanja: '日', meaning: '해 일' },
    { hanja: '月', meaning: '달 월' },
    { hanja: '星', meaning: '별 성' },
    { hanja: '工夫', meaning: '공부' },
    { hanja: '紙', meaning: '종이 지' },
    { hanja: '筆', meaning: '붓 필' },
    { hanja: '墨', meaning: '먹 묵' },
    { hanja: '硏', meaning: '벼루 연' },
    { hanja: '氣象', meaning: '기상' },
    { hanja: '靑', meaning: '푸를 청' },
    { hanja: '雨', meaning: '비 우' },
    { hanja: '雷', meaning: '우레 뢰' },
    { hanja: '電', meaning: '번개 전' },
    { hanja: '雪', meaning: '눈 설' },
    { hanja: '霜', meaning: '서리 상' },
    { hanja: '身體', meaning: '신체' },
    { hanja: '耳', meaning: '귀 이' },
    { hanja: '目', meaning: '눈 목' },
    { hanja: '口', meaning: '입 구' },
    { hanja: '鼻', meaning: '코 비' },
    { hanja: '肉骨', meaning: '육골' },
    { hanja: '頭', meaning: '머리 두' },
    { hanja: '脣齒', meaning: '순치' },
    { hanja: '手足', meaning: '수족' },
    { hanja: '色', meaning: '빛 색' },
    { hanja: '金', meaning: '쇠 금' },
    { hanja: '銀', meaning: '은 은' },
    { hanja: '銅', meaning: '구리 동' },
    { hanja: '黑', meaning: '검을 흑' },
    { hanja: '白', meaning: '흰 백' },
    { hanja: '紅', meaning: '붉을 홍' },
    { hanja: '靑', meaning: '푸를 청' },
    { hanja: '感情', meaning: '감정' },
    { hanja: '喜', meaning: '기쁠 희' },
    { hanja: '怒', meaning: '성낼 노' },
    { hanja: '哀', meaning: '슬플 애' },
    { hanja: '樂', meaning: '즐거울 락' },
    { hanja: '好', meaning: '좋을 호' },
    { hanja: '惡', meaning: '악할 악' }
];

// 무작위 단어를 선택하는 함수
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const randomWordElement = document.getElementById('random-word');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const resultElement = document.getElementById('result');

    // 현재 단어 초기화
    let currentWord = getRandomWord();

    // 정답 체크 함수
    function checkAnswer() {
        const userAnswer = answerInput.value.trim();
        if (userAnswer === currentWord.meaning) {
            resultElement.textContent = '정답입니다!';
        } else {
            resultElement.textContent = `오답입니다. 정답은 "${currentWord.meaning}"입니다.`;
        }

        // 다음 단어로 업데이트
        currentWord = getRandomWord();
        randomWordElement.textContent = currentWord.hanja;
        answerInput.value = ''; // 입력 필드 초기화
    }

    // 초기 단어 설정
    randomWordElement.textContent = currentWord.hanja;

    // 버튼 클릭 시 정답 체크
    submitButton.addEventListener('click', checkAnswer);

    // Enter 키 입력 시 정답 체크
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
});
