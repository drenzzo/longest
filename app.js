function evalStrings() {
    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');
    const error1 = document.querySelector('#error1');
    const error2 = document.querySelector('#error2');
    const result = document.querySelector('#result');

    if (text1.value === '') {
        error1.textContent = 'This field is required';
        error1.style.display = 'inline';
    } else {
        error1.style.display = text1.validity.patternMismatch ? 'inline' : 'none';
    }

    if (text2.value === '') {
        error2.textContent = 'This field is required';
        error2.style.display = 'inline';
    } else {
        error2.style.display = text2.validity.patternMismatch ? 'inline' : 'none';
    }

    if (!text1.validity.patternMismatch && !text2.validity.patternMismatch) {
        result.textContent = 'Length of longest common subsequence: ' + lcs(text1.value, text2.value);
    }
}


function lcs(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const dp = Array.from(Array(n+1), () => Array(m+1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    return dp[n][m];
}