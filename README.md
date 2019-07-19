# Hello，你好，我是一个网络时钟

标签（空格分隔）： 时钟 animation transform 时钟js 时钟html 时钟css

---
主要思路：
1. 画一个圆;
2. 画时钟的刻度线，可以一次画两条线，上面和下面相对的那两条，这样循环画30次就可以了;
3. 刻度线按照距离时钟最高点（12点）的位置，计算刻度旋转的度数，lineDeg(n)是需要旋转的度数, 360是圆的度数，60是刻度数，n是刻度的第n格。lineDeg(n) = 360 / 60 * n;（可以用transform: rotate(DEG);来旋转度数）
4. 这时候刻度群整体是向左偏移的，所以可以用transform: translateX(LONG)向右偏移；
5. 画时钟数字，时钟数字是12个，分别在对应的位置（12点-11点），画好之后，需要旋转刻度线的反角度（wordDeg），来还原字的角度，wordDeg = -lineDeg(n);
6. 这时候字还是偏中心点，需要给调整一个对应于时钟边缘的距离。（可以根据自己需要进行调整）
7. 接下来是画时分秒针了。
8. 然后写动画借用animation让时分秒针滚动起来，秒针旋转一圈给它60s，分针旋转一圈给它3600s，时针旋转一圈给它21600s。
9. 这时候你会发现时分秒针，是根据自己自身的中心点在那旋转，你可以加一个transform-origin: 50% 100%来改变时针的中心。
10. new Date()可以获取当前系统时间。分别用得到时、分、秒的函数来得到相对应的时间。
11. 计算时分秒的初始旋转角度：秒，secondDeg = second / 60 * 360；分，minuteDeg = (minute + second / 60) / 60 * 360；时，hourDeg = (hour + minute / 60 + second / 3600) / 12 * 360
12. 得到角度开始替换代码中的初始旋转角。代码如下所示：
```
$('#second').html('@keyframes secondMove{0%{transform:rotate(' + secondDeg + 'deg);}100%{transform: rotate(' + (360 + secondDeg) + 'deg);}}');
$('#minute').html('@keyframes minuteMove{0%{transform:rotate(' + minuteDeg + 'deg);}100%{transform: rotate(' + (360 + minuteDeg) + 'deg);}}');
$('#hour').html('@keyframes hourMove{0%{transform:rotate(' + hourDeg + 'deg);}100%{transform: rotate(' + (360 + hourDeg) + 'deg);}}');
```
具体的代码在Clock.html里面可见。

如果引用此代码，请您在用到的地方加上我的名字和我的链接，谢谢～

访问链接：
https://zhengxianyu.github.io/Clock/index
