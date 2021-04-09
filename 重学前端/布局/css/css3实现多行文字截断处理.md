```
// 单行：
.text-overflow ( @class ){
    .@{class} {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
}

// 多行：
.multi-text-overflow ( @class, @line ){
    .@{class} {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        display: box;
        -webkit-line-clamp: @line;
        -webkit-box-orient: vertical;
    }
}
```