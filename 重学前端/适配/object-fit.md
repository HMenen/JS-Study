object-fit理解

CSS3 background-size出现的比较早，大家应该知道其支持的一些值，除了数值之外，其还支持几个关键字，例如：cover, contain等。

object-fit也是类似的，但还是有些差异，具体有5个值：

.fill { object-fit: fill; }

.contain { object-fit: contain; }

.cover { object-fit: cover; }

.none { object-fit: none; }

.scale-down { object-fit: scale-down; }

每个属性值的具体含义如下（自己理解的白话文，官方释义见官网）：

fill: 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。
contain: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
cover: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。
none: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
scale-down: 中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。
