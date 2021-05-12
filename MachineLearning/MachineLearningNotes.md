# 吴恩达机器学习系列笔记


## 分类

* 监督学习：预先给予Data set 和标签，机器学习进行回归拟合或者分类拟合。

* 无监督学习：预先给予Data set，无标签，进行聚类算法

> 无监督学习和数据挖掘的区别?

## 模型：

数学符号 | 意义
---- | ----
$m$ | 训练样本的数量
$n$ | 样本的特征数
$x$ | 训练样本的输入
$y$ | 训练样本的目标(监督学习)
$x_j^{(i)}$ | 第$i$个训练样本的第j个特征值
$(x^{(i)},y^{(i)})$ | 第$i$个训练样本
$h_\theta(x)$ | 训练样本的输出

### 线性回归(Linear Regression)

单变量、多变量的线性回归函数

假设函数Hypothesis：

$$
h_\theta(x) = \theta_0 + \theta_1x
$$

参数Parameters：
$$
\theta_0, \theta_1
$$

代价函数：

$$
J(\theta_0,\theta_1) = \frac{1}{2m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2
$$

> 公式中使用$\frac{1}{2m}$而不是$\frac{1}{m}$是为了后面抵消求和式中的平方求导后带来的系数，对代价函数的比较是无影响的。

目标：

$$
\underset {\theta_0,\theta_1}{minimize} J(\theta_0,\theta_1)
$$

**梯度下降算法(Gradient Descent Algorithm)**

自动求解目标函数，从任何一个点出发，按照指定步长按梯度方向进行下降迭代，直到取到**局部最优点**，这是一种贪心策略。


`repeat until convergence {`
$$
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta_0, \theta_1) \quad (for \, j = 0 \, and \, j = 1)
$$
`}`


则对于线性回归的两个具体参数迭代为

$$
\begin{equation}\begin{split}
\theta_j &:= \theta_j - \alpha \frac{\partial}{\partial \theta_j} \frac{1}{2m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2 \\
&:= \theta_j - \alpha \frac{\partial}{\partial \theta_j} \frac{1}{2m}\sum_{i=1}^m(\theta_0 + \theta_1 x^{(i)}-y^{(i)})^2
\end{split}\end{equation}
$$

> 此处的梯度下降算法的为batch gradient descent，batch表示每一次迭代都使用了所有的数据集，即公式中的$\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2$

$$
\theta_0 := \theta_0 - \alpha \frac{1}{m}\sum_{i=1}^m(\theta_0 + \theta_1 x^{(i)} - y^{(i)}) \\
\theta_1 := \theta_1 - \alpha \frac{1}{m}\sum_{i=1}^m(\theta_0 + \theta_1 x^{(i)} - y^{(i)}) \cdot x^{(i)}
$$

> 其中$\alpha$为学习速率，表示梯度下降的快慢，即使保持$\alpha$恒定，$\theta_j$的迭代变化速度也会在趋近于局部最优点的地方趋于平缓
> 需对$\theta_0$和$\theta_1$进行同步更新
> 线性回归的代价函数为一个凹函数，极值唯一，可以通过梯度下降法寻找到局部最优解从而成为全局最优解


当存在多个特征时，此时训练样本的输入$x$为n维向量，参数$\theta$为一个n+1维向量，即
$$
\vec x =
\begin{bmatrix}   
   x_1 \\
   x_2 \\
   \vdots \\
   x_n
\end{bmatrix}

\vec \theta =
\begin{bmatrix}
   \theta_0 \\
   \theta_1 \\
   \theta_2 \\
   \vdots \\
   \theta_n
\end{bmatrix}
$$
则假设函数可以写为：

$$
\begin{equation}\begin{split}
h_\theta(x) &= \theta_0 + \theta_1x_1 + \theta_2x_2 + \cdots + \theta_nx_n  \\
&= \theta_0x_0 + \theta_1x_1 + \theta_2x_2 + \cdots + \theta_nx_n \\
&= \vec \theta^T \cdot \vec x
\end{split}\end{equation}
$$
其中
$$
\vec \theta =
\begin{bmatrix}
   \theta_0 \\
   \theta_1 \\
   \theta_2 \\
   \vdots \\
   \theta_n
\end{bmatrix}

\vec x =
\begin{bmatrix}
   1 \\
   x_1 \\
   x_2 \\
   \vdots \\
   x_n
\end{bmatrix}
$$
即将$x$表示为一个$x_0=1$的n+1维向量，则代价函数表示为：

$$
J(\theta_0,\theta_1,\cdots,\theta_n) = \frac{1}{2m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2 \\
J(\vec \theta) = \frac{1}{2m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2
$$

因此，多元特征向量的梯度下降算法为：
`repeat until convergence {`
$$
\begin{equation}\begin{split}
\theta_j &:= \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\vec \theta) \\
&:= \theta_j - \alpha \frac{\partial}{\partial \theta_j} \frac{1}{2m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2 \\
&:= \theta_j - \alpha \frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)}) \cdot x_j^{(i)}
\end{split}\end{equation}
$$
`}`

