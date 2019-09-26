// 文件导入
import { Component, OnInit } from '@angular/core'

// 重要的装饰器函数，专门为angular指定所需要的元数据
@Component({
  // 模板标签
  selector: 'app-heroes',
  // 结构文件
  templateUrl: './heroes.component.html',
  // 样式文件
  styleUrls: ['./heroes.component.less']
})

// 创建并导出类
export class HeroesComponent implements OnInit {
  // 提供属性 private:私有属性  public：公共属性
  private hero: string = 'Windstorm'

  // 构造函数
  constructor() {}

  // 钩子函数：组件创建完以后很快就会被调用，是放初始化逻辑最好的地方
  ngOnInit() {}
}
