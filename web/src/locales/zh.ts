export default {
  translation: {
    common: {
      delete: '删除',
      deleteModalTitle: '确定删除吗?',
      ok: '是',
      cancel: '否',
      total: '总共',
      rename: '重命名',
      name: '名称',
      save: '保存',
      namePlaceholder: '请输入名称',
      next: '下一步',
      create: '创建',
      edit: '编辑',
      upload: '上传',
      english: '英文',
      portugueseBr: '葡萄牙语 (巴西)',
      chinese: '简体中文',
      traditionalChinese: '繁体中文',
      language: '语言',
      languageMessage: '请输入语言',
      languagePlaceholder: '请选择语言',
      copy: '复制',
      copied: '复制成功',
      comingSoon: '即将推出',
      download: '下载',
      close: '关闭',
      preview: '预览',
      move: '移动',
      warn: '提醒',
      action: '操作',
      s: '秒',
      pleaseSelect: '请选择',
      pleaseInput: '请输入',
      submit: '提交',
      embedIntoSite: '嵌入网站',
      previousPage: '上一页',
      nextPage: '下一页',
      add: '添加',
    },
    login: {
      login: '登录',
      signUp: '注册',
      loginDescription: '很高兴再次见到您！',
      registerDescription: '很高兴您加入！',
      emailLabel: '邮箱',
      emailPlaceholder: '请输入邮箱地址',
      passwordLabel: '密码',
      passwordPlaceholder: '请输入密码',
      rememberMe: '记住我',
      signInTip: '没有帐户？',
      signUpTip: '已经有帐户？',
      nicknameLabel: '名称',
      nicknamePlaceholder: '请输入名称',
      register: '创建账户',
      continue: '继续',
      title: '开始构建您的智能助手',
      description:
        '免费注册以探索顶级 RAG 技术。 创建知识库和人工智能来增强您的业务',
      review: '来自 500 多条评论',
    },
    header: {
      knowledgeBase: '知识库',
      chat: '聊天',
      register: '注册',
      signin: '登录',
      home: '首页',
      setting: '用户设置',
      logout: '登出',
      fileManager: '文件管理',
      flow: 'Agent',
      search: '搜索',
    },
    knowledgeList: {
      welcome: '欢迎回来',
      description: '今天我们要使用哪个知识库？',
      createKnowledgeBase: '创建知识库',
      name: '名称',
      namePlaceholder: '请输入名称',
      doc: '文档',
      searchKnowledgePlaceholder: '搜索',
      noMoreData: '没有更多数据了',
    },
    knowledgeDetails: {
      dataset: '数据集',
      testing: '检索测试',
      configuration: '配置',
      knowledgeGraph: '知识图谱',
      files: '文件',
      name: '名称',
      namePlaceholder: '请输入名称',
      doc: '文档',
      datasetDescription: '😉 解析成功后才能问答哦。',
      addFile: '新增文件',
      searchFiles: '搜索文件',
      localFiles: '本地文件',
      emptyFiles: '新建空文件',
      webCrawl: '网页抓取',
      chunkNumber: '分块数',
      uploadDate: '上传日期',
      chunkMethod: '切片方法',
      enabled: '启用',
      disabled: '禁用',
      action: '动作',
      parsingStatus: '解析状态',
      processBeginAt: '开始于',
      processDuration: '持续时间',
      progressMsg: '进度',
      testingDescription:
        '请完成召回测试：确保你的配置可以从数据库召回正确的文本块。如果你调整了这里的默认设置，比如关键词相似度权重，请注意这里的改动不会被自动保存。请务必在聊天助手设置或者召回算子设置处同步更新相关设置。',
      similarityThreshold: '相似度阈值',
      similarityThresholdTip:
        '我们使用混合相似度得分来评估两行文本之间的距离。 它是加权关键词相似度和向量余弦相似度。 如果查询和块之间的相似度小于此阈值，则该块将被过滤掉。默认设置为 0.2，也就是说文本块的混合相似度得分至少 20 才会被召回。',
      vectorSimilarityWeight: '关键字相似度权重',
      vectorSimilarityWeightTip:
        '我们使用混合相似性评分来评估两行文本之间的距离。它是加权关键字相似性和矢量余弦相似性或rerank得分（0〜1）。两个权重的总和为1.0。',
      testText: '测试文本',
      testTextPlaceholder: '请输入您的问题！',
      testingLabel: '测试',
      similarity: '混合相似度',
      termSimilarity: '关键词相似度',
      vectorSimilarity: '向量相似度',
      hits: '命中数',
      view: '看法',
      filesSelected: '选定的文件',
      upload: '上传',
      run: '解析',
      runningStatus0: '未解析',
      runningStatus1: '解析中',
      runningStatus2: '取消',
      runningStatus3: '成功',
      runningStatus4: '失败',
      pageRanges: '页码范围',
      pageRangesTip:
        '页码范围：定义需要解析的页面范围。 不包含在这些范围内的页面将被忽略。',
      fromPlaceholder: '从',
      fromMessage: '缺少起始页码',
      toPlaceholder: '到',
      toMessage: '缺少结束页码（不包含）',
      layoutRecognize: 'PDF解析器',
      layoutRecognizeTip:
        '使用视觉模型进行 PDF 布局分析，以更好地识别文档结构，找到标题、文本块、图像和表格的位置。 如果选择 Naive 选项，则只能获取 PDF 的纯文本。请注意该功能只适用于 PDF 文档，对其他文档不生效。',
      taskPageSize: '任务页面大小',
      taskPageSizeMessage: '请输入您的任务页面大小！',
      taskPageSizeTip: `如果使用布局识别，PDF 文件将被分成连续的组。 布局分析将在组之间并行执行，以提高处理速度。 “任务页面大小”决定组的大小。 页面大小越大，将页面之间的连续文本分割成不同块的机会就越低。`,
      addPage: '新增页面',
      greaterThan: '当前值必须大于起始值！',
      greaterThanPrevious: '当前值必须大于之前的值！',
      selectFiles: '选择文件',
      changeSpecificCategory: '更改特定类别',
      uploadTitle: '点击或拖拽文件至此区域即可上传',
      uploadDescription:
        '支持单次或批量上传。本地部署的单次上传文件总大小上限为 1GB，单次批量上传文件数不超过 32，单个账户不限文件数量。对于 demo.ragflow.io：每次上传的总文件大小限制为 10MB，每个文件不得超过 10MB，每个账户最多可上传 128 个文件。严禁上传违禁文件。',
      chunk: '解析块',
      bulk: '批量',
      cancel: '取消',
      rerankModel: 'Rerank模型',
      rerankPlaceholder: '请选择',
      rerankTip: `非必选项：若不选择 rerank 模型，系统将默认采用关键词相似度与向量余弦相似度相结合的混合查询方式；如果设置了 rerank 模型，则混合查询中的向量相似度部分将被 rerank 打分替代。请注意：采用 rerank 模型会非常耗时。`,
      topK: 'Top-K',
      topKTip: `与 Rerank 模型配合使用，用于设置传给 Rerank 模型的文本块数量。`,
      delimiter: `文本分段标识符`,
      delimiterTip:
        '支持多字符作为分隔符，多字符用 `` 分隔符包裹。若配置成：\\n`##`; 系统将首先使用换行符、两个#号以及分号先对文本进行分割，随后再对分得的小文本块按照「建议文本块大小」设定的大小进行拼装。在设置文本分段标识符前请确保理解上述文本分段切片机制。',
      html4excel: '表格转HTML',
      html4excelTip: `与 General 切片方法配合使用。未开启状态下，表格文件（XLSX、XLS（Excel97~2003））会按行解析为键值对。开启后，表格文件会被解析为 HTML 表格。若原始表格超过 12 行，系统会自动按每 12 行拆分为多个 HTML 表格。`,
      autoKeywords: '自动关键词提取',
      autoKeywordsTip: `自动为每个文本块中提取 N 个关键词，用以提升查询精度。请注意：该功能采用“系统模型设置”中设置的默认聊天模型提取关键词，因此也会产生更多 Token 消耗。另外，你也可以手动更新生成的关键词。`,
      autoQuestions: '自动问题提取',
      autoQuestionsTip: `利用“系统模型设置”中设置的 chat model 对知识库的每个文本块提取 N 个问题以提高其排名得分。请注意，开启后将消耗额外的 token。您可以在块列表中查看、编辑结果。如果自动问题提取发生错误，不会妨碍整个分块过程，只会将空结果添加到原始文本块。`,
      redo: '是否清空已有 {{chunkNum}}个 chunk？',
      setMetaData: '设置元数据',
      pleaseInputJson: '请输入JSON',
      documentMetaTips: `<p>元数据为 Json 格式（不可搜索）。如果提示中包含此文档的任何块，它将被添加到 LLM 的提示中。</p>
<p>示例：</p>
<b>元数据为：</b><br>
<code>
{
“作者”：“Alex Dowson”，
“日期”：“2024-11-12”
}
</code><br>
<b>提示将为：</b><br>
<p>文档：the_name_of_document</p>
<p>作者：Alex Dowson</p>
<p>日期：2024-11-12</p>
<p>相关片段如下：</p>
<ul>
<li> 这是块内容....</li>
<li> 这是块内容....</li>
</ul>
`,
      metaData: '元数据',
      deleteDocumentConfirmContent:
        '该文档与知识图谱相关联。删除后，相关节点和关系信息将被删除，但图不会立即更新。更新图动作是在解析承载知识图谱提取任务的新文档的过程中执行的。',
      plainText: 'Naive',
      reRankModelWaring: '重排序模型非常耗时。',
    },
    knowledgeConfiguration: {
      titleDescription: '在这里更新您的知识库详细信息，尤其是切片方法。',
      name: '知识库名称',
      photo: '知识库图片',
      description: '描述',
      language: '文档语言',
      languageMessage: '请输入语言',
      languagePlaceholder: '请输入语言',
      permissions: '权限',
      embeddingModel: '嵌入模型',
      chunkTokenNumber: '建议文本块大小',
      chunkTokenNumberMessage: '块Token数是必填项',
      embeddingModelTip:
        '用于嵌入块的嵌入模型。 一旦知识库有了块，它就无法更改。 如果你想改变它，你需要删除所有的块。',
      permissionsTip:
        '如果把知识库权限设为“团队”，则所有团队成员都可以操作该知识库。',
      chunkTokenNumberTip:
        '建议的生成文本块的 token 数阈值。如果切分得到的小文本段 token 数达不到这一阈值就会不断与之后的文本段合并，直至再合并下一个文本段会超过这一阈值为止，此时产生一个最终文本块。如果系统在切分文本段时始终没有遇到文本分段标识符，即便文本段 token 数已经超过这一阈值，系统也不会生成新文本块。',
      chunkMethod: '切片方法',
      chunkMethodTip: '说明位于右侧。',
      upload: '上传',
      english: '英文',
      chinese: '中文',
      embeddingModelPlaceholder: '请选择嵌入模型',
      chunkMethodPlaceholder: '请选择分块方法',
      save: '保存',
      me: '只有我',
      team: '团队',
      cancel: '取消',
      methodTitle: '分块方法说明',
      methodExamples: '示例',
      methodExamplesDescription: '提出以下屏幕截图以促进理解。',
      dialogueExamplesTitle: '对话示例',
      methodEmpty: '这将显示知识库类别的可视化解释',
      book: `<p>支持的文件格式为<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
      由于一本书很长，并不是所有部分都有用，如果是 PDF，
      请为每本书设置<i>页面范围</i>，以消除负面影响并节省分析计算时间。</p>`,
      laws: `<p>支持的文件格式为<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。</p><p>
      法律文件有非常严格的书写格式。 我们使用文本特征来检测分割点。
      </p><p>
      chunk的粒度与'ARTICLE'一致，所有上层文本都会包含在chunk中。
      </p>`,
      manual: `<p>仅支持<b>PDF</b>。</p><p>
      我们假设手册具有分层部分结构。 我们使用最低的部分标题作为对文档进行切片的枢轴。
      因此，同一部分中的图和表不会被分割，并且块大小可能会很大。
      </p>`,
      naive: `<p>支持的文件格式为<b>DOCX、XLSX、XLS (Excel97~2003)、PPT、PDF、TXT、JPEG、JPG、PNG、TIF、GIF、CSV、JSON、EML、HTML</b>。</p>
      <p>此方法将简单的方法应用于块文件：</p>
      <p>
      <li>系统将使用视觉检测模型将连续文本分割成多个片段。</li>
      <li>接下来，这些连续的片段被合并成Token数不超过“Token数”的块。</li></p>`,
      paper: `<p>仅支持<b>PDF</b>文件。</p><p>
      如果我们的模型运行良好，论文将按其部分进行切片，例如<i>摘要、1.1、1.2</i>等。</p><p>
      这样做的好处是LLM可以更好的概括论文中相关章节的内容，
      产生更全面的答案，帮助读者更好地理解论文。
      缺点是它增加了 LLM 对话的背景并增加了计算成本，
      所以在对话过程中，你可以考虑减少‘<b>topN</b>’的设置。</p>`,
      presentation: `<p>支持的文件格式为<b>PDF</b>、<b>PPTX</b>。</p><p>
      每个页面都将被视为一个块。 并且每个页面的缩略图都会被存储。</p><p>
      <i>您上传的所有PPT文件都会使用此方法自动分块，无需为每个PPT文件进行设置。</i></p>`,
      qa: ` <p>
      此块方法支持<b> excel </b>和<b> csv/txt </b>文件格式。
    </p>
    <li>
      如果文件是<b> excel </b>格式，则应由两个列组成
      没有标题：一个提出问题，另一个用于答案，
      答案列之前的问题列。多张纸是
      只要列正确结构，就可以接受。
    </li>
    <li>
      如果文件是<b> csv/txt </b>格式
      以 UTF-8 编码且用 TAB 作分开问题和答案的定界符。
    </li>
    <p>
      <i>
        未能遵循上述规则的文本行将被忽略，并且
        每个问答对将被认为是一个独特的部分。
      </i>
    </p>`,
      resume: `<p>支持的文件格式为<b>DOCX</b>、<b>PDF</b>、<b>TXT</b>。
      </p><p>
      简历有多种格式，就像一个人的个性一样，但我们经常必须将它们组织成结构化数据，以便于搜索。
      </p><p>
      我们不是将简历分块，而是将简历解析为结构化数据。 作为HR，你可以扔掉所有的简历，
      您只需与<i>'RAGFlow'</i>交谈即可列出所有符合资格的候选人。
      </p>
        `,
      table: `支持<p><b>XLSX</b>和<b>CSV/TXT</b>格式文件。</p><p>
      以下是一些提示：
      <ul>
    <li>对于 csv 或 txt 文件，列之间的分隔符为 <em><b>TAB</b></em>。</li>
    <li>第一行必须是列标题。</li>
    <li>列标题必须是有意义的术语，以便我们的大语言模型能够理解。
    列举一些同义词时最好使用斜杠<i>'/'</i>来分隔，甚至更好
    使用方括号枚举值，例如 <i>'gender/sex(male,female)'</i>.<p>
    以下是标题的一些示例：<ol>
        <li>供应商/供货商<b>'TAB'</b>颜色（黄色、红色、棕色）<b>'TAB'</b>性别（男、女）<b>'TAB'</ b>尺码（M、L、XL、XXL）</li>
        <li>姓名/名字<b>'TAB'</b>电话/手机/微信<b>'TAB'</b>最高学历（高中，职高，硕士，本科，博士，初中，中技，中 专，专科，专升本，MPA，MBA，EMBA）</li>
        </ol>
        </p>
    </li>
    <li>表中的每一行都将被视为一个块。</li>
    </ul>`,
      picture: `
      <p>支持图像文件。 视频即将推出。</p><p>
      如果图片中有文字，则应用 OCR 提取文字作为其文字描述。
      </p><p>
      如果OCR提取的文本不够，可以使用视觉LLM来获取描述。
      </p>`,
      one: `
      <p>支持的文件格式为<b>DOCX、EXCEL、PDF、TXT</b>。
      </p><p>
      对于一个文档，它将被视为一个完整的块，根本不会被分割。
      </p><p>
      如果你要总结的东西需要一篇文章的全部上下文，并且所选LLM的上下文长度覆盖了文档长度，你可以尝试这种方法。
      </p>`,
      knowledgeGraph: `<p>支持的文件格式为<b>DOCX、EXCEL、PPT、IMAGE、PDF、TXT、MD、JSON、EML</b>

<p>文件分块后，使用分块提取整个文档的知识图谱和思维导图。此方法将简单的方法应用于分块文件：
连续的文本将被切成大约 512 个 token 数的块。</p>
<p>接下来，将分块传输到 LLM 以提取知识图谱和思维导图的节点和关系。</p>

注意您需要指定的条目类型。</p>`,
      tag: `<p>使用“Tag”分块方法的知识库用作标签集.其他知识库可以把标签集当中的标签按照相似度匹配到自己对应的文本块中，对这些知识库的查询也将根据此标签集对自己进行标记。</p>
<p>使用“标签”作为分块方法的知识库<b>不</b>参与 RAG 检索过程。</p>
<p>标签集中的每个文本分块是都是相互独立的标签和标签描述的文本对。</p>

<p>Tag 分块方法支持<b>XLSX</b>和<b>CSV/TXT</b>文件格式。</p>
<p>如果文件为<b>XLSX</b>格式，则它应该包含两列无标题：一列用于标签描述，另一列用于标签，标签描述列位于标签列之前。支持多个工作表，只要列结构正确即可。</p>
<p>如果文件为 <b>CSV/TXT</b> 格式，则必须使用 UTF-8 编码并以 TAB 作为分隔符来分隔内容和标签。</p>
<p>在标签列中，标签之间使用英文逗号分隔。</p>
<i>不符合上述规则的文本行将被忽略。</i>
`,
      useRaptor: '使用召回增强RAPTOR策略',
      useRaptorTip: '请参考 https://huggingface.co/papers/2401.18059',
      prompt: '提示词',
      promptMessage: '提示词是必填项',
      promptText: `请总结以下段落。 小心数字，不要编造。 段落如下：
      {cluster_content}
以上就是你需要总结的内容。`,
      maxToken: '最大token数',
      maxTokenMessage: '最大token数是必填项',
      threshold: '阈值',
      thresholdMessage: '阈值是必填项',
      maxCluster: '最大聚类数',
      maxClusterMessage: '最大聚类数是必填项',
      randomSeed: '随机种子',
      randomSeedMessage: '随机种子是必填项',
      promptTip:
        '系统提示为大模型提供任务描述、规定回复方式，以及设置其他各种要求。系统提示通常与 key （变量）合用，通过变量设置大模型的输入数据。你可以通过斜杠或者 (x) 按钮显示可用的 key。',
      maxTokenTip: '用于汇总的最大token数。',
      thresholdTip: '阈值越大，聚类越少。',
      maxClusterTip: '最大聚类数。',
      entityTypes: '实体类型',
      pageRank: '页面排名',
      pageRankTip: `知识库检索时，你可以为特定知识库设置较高的 PageRank 分数，该知识库中匹配文本块的混合相似度得分会自动叠加 PageRank 分数，从而提升排序权重。详见 https://ragflow.io/docs/dev/set_page_rank。`,
      tagName: '标签',
      frequency: '频次',
      searchTags: '搜索标签',
      tagCloud: '云',
      tagTable: '表',
      tagSet: '标签集',
      topnTags: 'Top-N 标签',
      tagSetTip: `
      <p> 请选择一个或多个标签集或标签知识库，用于对知识库中的每个文本块进行标记。</p>
      <p>对这些文本块的查询也将自动关联相应标签。 </p>
      <p>此功能基于文本相似度，能够为数据集的文本块批量添加更多领域知识，从而显著提高检索准确性。该功能还能提升大量文本块的操作效率。</p>
      <p>为了更好地理解标签集的作用，以下是标签集和关键词之间的主要区别：</p>
      <ul>
      <li>标签集是一个由用户定义和管理的封闭集，而自动生成的关键词属于开放集合。 </li>
      <li>在给你的知识库文本块批量打标签之前，你需要先生成标签集作为样本。 </li>
      <li>自动关键词提取功能中的关键词由 LLM 生成，此过程相对耗时，并且会产生一定的 Token 消耗。 </li>
      </ul>
      <p> 详见：https://ragflow.io/docs/dev/use_tag_sets </p>
      `,
      tags: '标签',
      addTag: '增加标签',
      useGraphRag: '提取知识图谱',
      useGraphRagTip:
        '基于知识库内所有切好的文本块构建知识图谱，用以提升多跳和复杂问题回答的正确率。请注意：构建知识图谱将消耗大量 token 和时间。详见 https://ragflow.io/docs/dev/construct_knowledge_graph。',
      graphRagMethod: '方法',
      graphRagMethodTip: `Light：实体和关系提取提示来自 GitHub - HKUDS/LightRAG：“LightRAG：简单快速的检索增强生成”<br>
General：实体和关系提取提示来自 GitHub - microsoft/graphrag：基于图的模块化检索增强生成 (RAG) 系统`,
      resolution: '实体归一化',
      resolutionTip: `解析过程会将具有相同含义的实体合并在一起，从而使知识图谱更简洁、更准确。应合并以下实体：特朗普总统、唐纳德·特朗普、唐纳德·J·特朗普、唐纳德·约翰·特朗普`,
      community: '社区报告生成',
      communityTip:
        '区块被聚集成层次化的社区，实体和关系通过更高抽象层次将每个部分连接起来。然后，我们使用 LLM 生成每个社区的摘要，称为社区报告。更多信息：https://www.microsoft.com/en-us/research/blog/graphrag-improving-global-search-via-dynamic-community-selection/',
    },
    chunk: {
      chunk: '解析块',
      bulk: '批量',
      selectAll: '选择所有',
      enabledSelected: '启用选定的',
      disabledSelected: '禁用选定的',
      deleteSelected: '删除选定的',
      search: '搜索',
      all: '所有',
      enabled: '启用',
      disabled: '禁用',
      keyword: '关键词',
      function: '函数',
      chunkMessage: '请输入值！',
      full: '全文',
      ellipse: '省略',
      graph: '知识图谱',
      mind: '思维导图',
      question: '问题',
      questionTip: `如果有给定的问题，则块的嵌入将基于它们。`,
    },
    chat: {
      newConversation: '新会话',
      createAssistant: '新建助理',
      assistantSetting: '助理设置',
      promptEngine: '提示引擎',
      modelSetting: '模型设置',
      chat: '聊天',
      newChat: '新建聊天',
      send: '发送',
      sendPlaceholder: '消息概要助手...',
      chatConfiguration: '聊天配置',
      chatConfigurationDescription: '为你的知识库配置专属聊天助手！ 💕',
      assistantName: '助理姓名',
      assistantNameMessage: '助理姓名是必填项',
      namePlaceholder: '例如 贾维斯简历',
      assistantAvatar: '助理头像',
      language: '语言',
      emptyResponse: '空回复',
      emptyResponseTip: `如果在知识库中没有检索到用户的问题，它将使用它作为答案。 如果您希望 LLM 在未检索到任何内容时提出自己的意见，请将此留空。`,
      emptyResponseMessage: `当知识库中未检索到任何相关信息时，将触发空响应。由于未选择任何知识库，因此请清除“空响应”。`,
      setAnOpener: '设置开场白',
      setAnOpenerInitial: `你好！ 我是你的助理，有什么可以帮到你的吗？`,
      setAnOpenerTip: '您想如何欢迎您的客户？',
      knowledgeBases: '知识库',
      knowledgeBasesMessage: '请选择',
      knowledgeBasesTip: '选择关联的知识库。',
      system: '系统提示词',
      systemInitialValue: `你是一个智能助手，请总结知识库的内容来回答问题，请列举知识库中的数据详细回答。当所有知识库内容都与问题无关时，你的回答必须包括“知识库中未找到您要的答案！”这句话。回答需要考虑聊天历史。
        以下是知识库：
        {knowledge}
        以上是知识库。`,
      systemMessage: '请输入',
      systemTip:
        '当LLM回答问题时，你需要LLM遵循的说明，比如角色设计、答案长度和答案语言等。',
      topN: 'Top N',
      topNTip: `并非所有相似度得分高于“相似度阈值”的块都会被提供给大语言模型。 LLM 只能看到这些“Top N”块。`,
      variable: '变量',
      variableTip: `你可以通过对话 API，并配合变量设置来动态调整大模型的系统提示词。
      {knowledge}为系统预留变量，代表从指定知识库召回的文本块。
      “系统提示词”中的所有变量都必须用大括号{}括起来。详见 https://ragflow.io/docs/dev/set_chat_variables。`,
      add: '新增',
      key: '关键字',
      optional: '可选的',
      operation: '操作',
      model: '模型',
      modelTip: '大语言聊天模型',
      modelMessage: '请选择',
      freedom: '自由度',
      improvise: '即兴创作',
      precise: '精确',
      balance: '平衡',
      freedomTip: `“精确”意味着大语言模型会保守并谨慎地回答你的问题。 “即兴发挥”意味着你希望大语言模型能够自由地畅所欲言。 “平衡”是谨慎与自由之间的平衡。`,
      temperature: '温度',
      temperatureMessage: '温度是必填项',
      temperatureTip:
        '该参数控制模型预测的随机性。 较低的温度使模型对其响应更有信心，而较高的温度则使其更具创造性和多样性。',
      topP: 'Top P',
      topPMessage: 'Top P 是必填项',
      topPTip:
        '该参数也称为“核心采样”，它设置一个阈值来选择较小的单词集进行采样。 它专注于最可能的单词，剔除不太可能的单词。',
      presencePenalty: '存在处罚',
      presencePenaltyMessage: '存在处罚是必填项',
      presencePenaltyTip:
        '这会通过惩罚对话中已经出现的单词来阻止模型重复相同的信息。',
      frequencyPenalty: '频率惩罚',
      frequencyPenaltyMessage: '频率惩罚是必填项',
      frequencyPenaltyTip:
        '与存在惩罚类似，这减少了模型频繁重复相同单词的倾向。',
      maxTokens: '最大token数',
      maxTokensMessage: '最大token数是必填项',
      maxTokensTip:
        '这设置了模型输出的最大长度，以标记（单词或单词片段）的数量来衡量。',
      maxTokensInvalidMessage: '请输入有效的最大令牌数。',
      maxTokensMinMessage: '最大令牌数不能小于 0。',
      quote: '显示引文',
      quoteTip: '是否应该显示原文出处？',
      selfRag: 'Self-RAG',
      selfRagTip: '请参考: https://huggingface.co/papers/2310.11511',
      overview: '聊天 ID',
      pv: '消息数',
      uv: '活跃用户数',
      speed: 'Token 输出速度',
      tokens: '消耗Token数',
      round: '会话互动数',
      thumbUp: '用户满意度',
      preview: '预览',
      embedded: '嵌入',
      serviceApiEndpoint: '服务API端点',
      apiKey: 'API KEY',
      apiReference: 'API 文档',
      dateRange: '日期范围：',
      backendServiceApi: 'API 服务器',
      createNewKey: '创建新密钥',
      created: '创建于',
      action: '操作',
      embedModalTitle: '嵌入网站',
      comingSoon: '即将推出',
      fullScreenTitle: '全屏嵌入',
      fullScreenDescription: '将以下iframe嵌入您的网站处于所需位置',
      partialTitle: '部分嵌入',
      extensionTitle: 'Chrome 插件',
      tokenError: '请先创建 API Token!',
      betaError: '请先在系统设置中申请API密钥。',
      searching: '搜索中',
      parsing: '解析中',
      uploading: '上传中',
      uploadFailed: '上传失败',
      regenerate: '重新生成',
      read: '朗读内容',
      tts: '文本转语音',
      ttsTip: '是否用语音转换播放语音，请先在设置里面选择TTS（语音转换模型）。',
      relatedQuestion: '相关问题',
      answerTitle: '智能回答',
      multiTurn: '多轮对话优化',
      multiTurnTip:
        '在多轮对话的中，对去知识库查询的问题进行优化。会调用大模型额外消耗token。',
      howUseId: '如何使用聊天ID？',
      description: '助理描述',
      descriptionPlaceholder:
        '例如 你是一个专业的简历助手，只能回答简历的问题。',
      useKnowledgeGraph: '使用知识图谱',
      useKnowledgeGraphTip:
        '是否检索与所选知识库对应的知识图谱相关文本块，以处理复杂的多跳问题？这一过程将涉及对实体、关系和社区报告文本块的多次检索，会显著延长检索时间。',
      keyword: '关键词分析',
      keywordTip: `应用 LLM 分析用户的问题，提取在相关性计算中要强调的关键词。`,
      reasoning: '推理',
      reasoningTip:
        '在问答过程中是否启用推理工作流，例如Deepseek-R1或OpenAI o1等模型所采用的方式。启用后，该功能允许模型访问外部知识，并借助思维链推理等技术逐步解决复杂问题。通过将问题分解为可处理的步骤，这种方法增强了模型提供准确回答的能力，从而在需要逻辑推理和多步思考的任务上表现更优。',
      tavilyApiKeyTip:
        '如果 API 密钥设置正确，它将利用 Tavily 进行网络搜索作为知识库的补充。',
      tavilyApiKeyMessage: '请输入你的 Tavily API Key',
      tavilyApiKeyHelp: '如何获取？',
    },
    setting: {
      profile: '概要',
      profileDescription: '在此更新您的照片和个人详细信息。',
      maxTokens: '最大token数',
      maxTokensMessage: '最大token数是必填项',
      maxTokensTip:
        '这设置了模型输出的最大长度，以标记（单词或单词片段）的数量来衡量。',
      maxTokensInvalidMessage: '请输入有效的最大令牌数。',
      maxTokensMinMessage: '最大令牌数不能小于 0。',
      password: '密码',
      passwordDescription: '请输入您当前的密码以更改您的密码。',
      model: '模型提供商',
      modelDescription: '在此设置模型参数和 API KEY。',
      team: '团队',
      system: '系统',
      logout: '登出',
      username: '用户名',
      usernameMessage: '请输入用户名',
      photo: '头像',
      photoDescription: '这将显示在您的个人资料上。',
      colorSchema: '主题',
      colorSchemaMessage: '请选择您的主题！',
      colorSchemaPlaceholder: '请选择您的主题！',
      bright: '明亮',
      dark: '暗色',
      timezone: '时区',
      timezoneMessage: '请选择时区',
      timezonePlaceholder: '请选择时区',
      email: '邮箱地址',
      emailDescription: '一旦注册，电子邮件将无法更改。',
      currentPassword: '当前密码',
      currentPasswordMessage: '请输入当前密码',
      newPassword: '新密码',
      newPasswordMessage: '请输入新密码',
      newPasswordDescription: '您的新密码必须超过 8 个字符。',
      confirmPassword: '确认新密码',
      confirmPasswordMessage: '请确认新密码',
      confirmPasswordNonMatchMessage: '您输入的新密码不匹配！',
      cancel: '取消',
      addedModels: '添加了的模型',
      modelsToBeAdded: '待添加的模型',
      addTheModel: '添加模型',
      apiKey: 'API-Key',
      apiKeyMessage: '请输入api key（如果是本地部署的模型，请忽略它）',
      apiKeyTip: 'API key可以通过注册相应的LLM供应商来获取。',
      showMoreModels: '展示更多模型',
      baseUrl: 'Base-Url',
      baseUrlTip:
        '如果您的 API 密钥来自 OpenAI，请忽略它。 任何其他中间提供商都会提供带有 API 密钥的基本 URL。',
      modify: '修改',
      systemModelSettings: '设置默认模型',
      chatModel: '聊天模型',
      chatModelTip: '所有新创建的知识库都会使用默认的聊天模型。',
      ttsModel: 'TTS模型',
      ttsModelTip:
        '默认的tts模型会被用于在对话过程中请求语音生成时使用。如未显示可选模型，请根据 https://ragflow.io/docs/dev/supported_models 确认你的模型供应商是否提供该模型。',
      embeddingModel: '嵌入模型',
      embeddingModelTip:
        '所有新创建的知识库使用的默认嵌入模型。如未显示可选模型，请检查你是否在使用 RAGFlow slim 版(不含嵌入模型)；或根据 https://ragflow.io/docs/dev/supported_models 确认你的模型供应商是否提供该模型。',
      img2txtModel: 'Img2txt模型',
      img2txtModelTip:
        '所有新创建的知识库都将使用默认的 img2txt 模型。 它可以描述图片或视频。如未显示可选模型，请根据 https://ragflow.io/docs/dev/supported_models 确认你的模型供应商是否提供该模型。',
      sequence2txtModel: 'Speech2txt模型',
      sequence2txtModelTip:
        '所有新创建的知识库都将使用默认的 ASR 模型。 使用此模型将语音翻译为相应的文本。如未显示可选模型，请根据 https://ragflow.io/docs/dev/supported_models 确认你的模型供应商是否提供该模型。',
      rerankModel: 'Rerank模型',
      rerankModelTip: `默认的 reranking 模型。如未显示可选模型，请根据 https://ragflow.io/docs/dev/supported_models 确认你的模型供应商是否提供该模型。`,
      workspace: '工作空间',
      upgrade: '升级',
      addLlmTitle: '添加 LLM',
      modelName: '模型名称',
      modelID: '模型ID',
      modelUid: '模型UID',
      modelType: '模型类型',
      addLlmBaseUrl: '基础 Url',
      vision: '是否支持 Vision',
      modelNameMessage: '请输入模型名称！',
      modelTypeMessage: '请输入模型类型！',
      baseUrlNameMessage: '请输入基础 Url！',
      ollamaLink: '如何集成 {{name}}',
      FishAudioLink: '如何使用Fish Audio',
      TencentCloudLink: '如何使用腾讯云语音识别',
      volcModelNameMessage: '请输入模型名称！',
      addEndpointID: '模型 EndpointID',
      endpointIDMessage: '请输入模型对应的EndpointID',
      addArkApiKey: '火山 ARK_API_KEY',
      ArkApiKeyMessage: '请输入火山创建的ARK_API_KEY',
      bedrockModelNameMessage: '请输入名称！',
      addBedrockEngineAK: 'ACCESS KEY',
      bedrockAKMessage: '请输入 ACCESS KEY',
      addBedrockSK: 'SECRET KEY',
      bedrockSKMessage: '请输入 SECRET KEY',
      bedrockRegion: 'AWS Region',
      bedrockRegionMessage: '请选择！',
      'us-east-1': '美国东部 (弗吉尼亚北部)',
      'us-west-2': '美国西部 (俄勒冈州)',
      'ap-southeast-1': '亚太地区 (新加坡)',
      'ap-northeast-1': '亚太地区 (东京)',
      'eu-central-1': '欧洲 (法兰克福)',
      'us-gov-west-1': 'AWS GovCloud (US-West)',
      'ap-southeast-2': '亚太地区 (悉尼)',
      addHunyuanSID: '混元 Secret ID',
      HunyuanSIDMessage: '请输入 Secret ID',
      addHunyuanSK: '混元 Secret Key',
      HunyuanSKMessage: '请输入 Secret Key',
      addTencentCloudSID: '腾讯云 Secret ID',
      TencentCloudSIDMessage: '请输入 Secret ID',
      addTencentCloudSK: '腾讯云 Secret Key',
      TencentCloudSKMessage: '请输入 Secret Key',
      SparkModelNameMessage: '请选择星火模型！',
      addSparkAPIPassword: '星火 APIPassword',
      SparkAPIPasswordMessage: '请输入 APIPassword',
      addSparkAPPID: '星火 APPID',
      SparkAPPIDMessage: '请输入 APPID',
      addSparkAPISecret: '星火 APISecret',
      SparkAPISecretMessage: '请输入 APISecret',
      addSparkAPIKey: '星火 APIKey',
      SparkAPIKeyMessage: '请输入 APIKey',
      yiyanModelNameMessage: '请输入模型名称',
      addyiyanAK: '一言 API KEY',
      yiyanAKMessage: '请输入 API KEY',
      addyiyanSK: '一言 Secret KEY',
      yiyanSKMessage: '请输入 Secret KEY',
      FishAudioModelNameMessage: '请为你的TTS模型起名',
      addFishAudioAK: 'Fish Audio API KEY',
      FishAudioAKMessage: '请输入 API KEY',
      addFishAudioRefID: 'FishAudio Refrence ID',
      FishAudioRefIDMessage: '请输入引用模型的ID（留空表示使用默认模型）',
      GoogleModelIDMessage: '请输入 model ID!',
      addGoogleProjectID: 'Project ID',
      GoogleProjectIDMessage: '请输入 Project ID',
      addGoogleServiceAccountKey:
        'Service Account Key(Leave blank if you use Application Default Credentials)',
      GoogleServiceAccountKeyMessage:
        '请输入 Google Cloud Service Account Key in base64 format',
      addGoogleRegion: 'Google Cloud 区域',
      GoogleRegionMessage: '请输入 Google Cloud 区域',
      modelProvidersWarn: `请先在<b>模型提供商</b>中添加嵌入模型和LLM，然后在“系统模型设置”中设置它们。`,
      apiVersion: 'API版本',
      apiVersionMessage: '请输入API版本!',
      add: '添加',
      updateDate: '更新日期',
      role: '角色',
      invite: '邀请',
      agree: '同意',
      refuse: '拒绝',
      teamMembers: '团队成员',
      joinedTeams: '加入的团队',
      sureDelete: '您确定要删除该成员吗？',
      quit: '退出',
      sureQuit: '确定退出加入的团队吗？',
      secretKey: '密钥',
      publicKey: '公钥',
      secretKeyMessage: '请输入私钥',
      publicKeyMessage: '请输入公钥',
      hostMessage: '请输入 host',
      configuration: '配置',
      langfuseDescription:
        '跟踪、评估、提示管理和指标，以调试和改进您的 LLM 应用程序。',
      viewLangfuseSDocumentation: '查看 Langfuse 的文档',
      view: '查看',
      modelsToBeAddedTooltip:
        '如果你的模型供应商在这里没有列出，但是宣称 OpenAI-compatible，可以通过选择卡片 OpenAI-API-compatible 设置相关模型。',
    },
    message: {
      registered: '注册成功',
      logout: '登出成功',
      logged: '登录成功',
      pleaseSelectChunk: '请选择解析块',
      modified: '更新成功',
      created: '创建成功',
      deleted: '删除成功',
      renamed: '重命名成功',
      operated: '操作成功',
      updated: '更新成功',
      uploaded: '上传成功',
      200: '服务器成功返回请求的数据。',
      201: '新建或修改数据成功。',
      202: '一个请求已经进入后台排队（异步任务）。',
      204: '删除数据成功。',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
      401: '请重新登录。',
      403: '用户得到授权，但是访问是被禁止的。',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
      406: '请求的格式不可得。',
      410: '请求的资源被永久删除，且不会再得到的。',
      413: '上传的文件总大小过大。',
      422: '当创建一个对象时，发生一个验证错误。',
      500: '服务器发生错误，请检查服务器。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
      requestError: '请求错误',
      networkAnomalyDescription: '您的网络发生异常，无法连接服务器',
      networkAnomaly: '网络异常',
      hint: '提示',
    },
    fileManager: {
      name: '名称',
      uploadDate: '上传日期',
      knowledgeBase: '知识库',
      size: '大小',
      action: '操作',
      addToKnowledge: '链接知识库',
      pleaseSelect: '请选择',
      newFolder: '新建文件夹',
      uploadFile: '上传文件',
      parseOnCreation: '创建时解析',
      uploadTitle: '点击或拖拽文件至此区域即可上传',
      uploadDescription:
        '支持单次或批量上传。 本地部署的单次上传文件总大小上限为 1GB，单次批量上传文件数不超过 32，单个账户不限文件数量。对于 demo.ragflow.io：每次上传的总文件大小限制为 10MB，每个文件不得超过 10MB，每个账户最多可上传 128 个文件。严禁上传违禁文件。',
      file: '文件',
      directory: '文件夹',
      local: '本地上传',
      s3: 'S3 上传',
      preview: '预览',
      fileError: '文件错误',
      uploadLimit: '文件大小不能超过10M，文件总数不超过128个',
      destinationFolder: '目标文件夹',
    },
    flow: {
      flow: '工作流',
      noMoreData: '没有更多数据了',
      historyversion: '历史版本',
      version: {
        details: '版本详情',
        download: '下载',
      },
      cite: '引用',
      citeTip: '引用',
      name: '名称',
      nameMessage: '请输入名称',
      description: '描述',
      examples: '示例',
      to: '下一步',
      msg: '消息',
      messagePlaceholder: '消息',
      messageMsg: '请输入消息或删除此字段。',
      addField: '新增字段',
      addMessage: '新增消息',
      loop: '循环上限',
      loopTip:
        'loop为当前组件循环次数上限，当循环次数超过loop的值时，说明组件不能完成当前任务，请重新优化agent',
      yes: '是',
      no: '否',
      key: 'key',
      componentId: '组件ID',
      add: '新增',
      operation: '操作',
      run: '运行',
      save: '保存',
      title: 'ID：',
      beginDescription: '这是流程开始的地方',
      answerDescription: `该组件用作机器人与人类之间的接口。它接收用户的输入并显示机器人的计算结果。`,
      retrievalDescription: `此组件用于从知识库中检索相关信息。选择知识库。如果没有检索到任何内容，将返回“空响应”。`,
      generateDescription: `此组件用于调用LLM生成文本，请注意提示的设置。`,
      categorizeDescription: `此组件用于对文本进行分类。请指定类别的名称、描述和示例。每个类别都指向不同的下游组件。`,
      relevantDescription: `该组件用来判断upstream的输出是否与用户最新的问题相关，‘是’代表相关，‘否’代表不相关。`,
      rewriteQuestionDescription: `此组件用于细化用户的提问。通常，当用户的原始提问无法从知识库中检索到相关信息时，此组件可帮助您将问题更改为更符合知识库表达方式的适当问题。`,
      messageDescription:
        '此组件用于向用户发送静态信息。您可以准备几条消息，这些消息将被随机选择。',
      keywordDescription: `该组件用于从用户的问题中提取关键词。Top N指定需要提取的关键词数量。`,
      switchDescription: `该组件用于根据前面组件的输出评估条件，并相应地引导执行流程。通过定义各种情况并指定操作，或在不满足条件时采取默认操作，实现复杂的分支逻辑。`,
      wikipediaDescription: `此组件用于从 https://www.wikipedia.org/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。`,
      promptText: `请总结以下段落。注意数字，不要胡编乱造。段落如下：
{input}
以上就是你需要总结的内容。`,
      createGraph: '创建 Agent',
      createFromTemplates: '从模板创建',
      retrieval: '知识检索',
      generate: '生成回答',
      answer: '对话',
      categorize: '问题分类',
      relevant: '是否相关',
      rewriteQuestion: '问题优化',
      begin: '开始',
      message: '静态消息',
      blank: '空',
      createFromNothing: '从无到有',
      addItem: '新增',
      addSubItem: '新增子项',
      nameRequiredMsg: '名称不能为空',
      nameRepeatedMsg: '名称不能重复',
      keywordExtract: '关键词',
      keywordExtractDescription: `该组件用于从用户的问题中提取关键词。Top N指定需要提取的关键词数量。`,
      baidu: '百度',
      baiduDescription: `此组件用于从 www.baidu.com 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。`,
      duckDuckGo: 'DuckDuckGo',
      duckDuckGoDescription:
        '此元件用於從 www.duckduckgo.com 取得搜尋結果。通常，它作為知識庫的補充。 Top N 指定您需要調整的搜尋結果數。',
      channel: '频道',
      channelTip: '针对该组件的输入进行文本搜索或新闻搜索',
      text: '文本',
      news: '新闻',
      messageHistoryWindowSize: '历史消息窗口大小',
      messageHistoryWindowSizeTip:
        'LLM 需要查看的对话历史窗口大小。越大越好。但要注意 LLM 的最大内容长度。',
      wikipedia: '维基百科',
      emailTip:
        '此组件用于从 https://pubmed.ncbi.nlm.nih.gov/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数。电子邮件是必填字段。',
      email: '邮箱',
      pubMed: 'PubMed',
      pubMedDescription:
        '此组件用于从 https://pubmed.ncbi.nlm.nih.gov/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数。电子邮件是必填字段。',
      arXiv: 'ArXiv',
      arXivDescription:
        '此组件用于从 https://arxiv.org/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。',
      sortBy: '排序方式',
      submittedDate: '提交日期',
      lastUpdatedDate: '最后更新日期',
      relevance: '关联',
      google: 'Google',
      googleDescription:
        '此组件用于从https://www.google.com/获取搜索结果。通常，它作为知识库的补充。Top N 和 SerpApi API 密钥指定您需要调整的搜索结果数量。',
      bing: 'Bing',
      bingDescription:
        '此组件用于从 https://www.bing.com/ 获取搜索结果。通常，它作为知识库的补充。Top N 和 Bing Subscription-Key 指定您需要调整的搜索结果数量。',
      apiKey: 'API KEY',
      country: '国家和地区',
      language: '语言',
      googleScholar: '谷歌学术',
      googleScholarDescription: `此组件用于从 https://scholar.google.com/ 获取搜索结果。通常，它作为知识库的补充。Top N 指定您需要调整的搜索结果数量。`,
      yearLow: '开始年份',
      yearHigh: '结束年份',
      patents: '专利',
      data: '数据',
      deepL: 'DeepL',
      deepLDescription:
        '该组件用于从 https://www.deepl.com/ 获取翻译。通常，它提供更专业的翻译结果。',
      authKey: '授权键',
      sourceLang: '源语言',
      targetLang: '目标语言',
      gitHub: 'GitHub',
      gitHubDescription:
        '该组件用于从 https://github.com/ 搜索仓库。Top N 指定需要调整的搜索结果数量。',
      baiduFanyi: '百度翻译',
      baiduFanyiDescription:
        '该组件用于从 https://fanyi.baidu.com/ 获取翻译。通常，它提供更专业的翻译结果',
      appid: 'App id',
      secretKey: '秘钥',
      domain: '领域',
      transType: '翻译类型',
      baiduSecretKeyOptions: {
        translate: '通用翻译',
        fieldtranslate: '领域翻译',
      },
      baiduDomainOptions: {
        it: '信息技术领域',
        finance: '金融财经领域',
        machinery: '机械制造领域',
        senimed: '生物医药领域',
        novel: '网络文学领域',
        academic: '学术论文领域',
        aerospace: '航空航天领域',
        wiki: '人文社科领域',
        news: '新闻资讯领域',
        law: '法律法规领域',
        contract: '合同领域',
      },
      baiduSourceLangOptions: {
        auto: '自动检测',
        zh: '中文',
        en: '英语',
        yue: '粤语',
        wyw: '文言文',
        jp: '日语',
        kor: '韩语',
        fra: '法语',
        spa: '西班牙语',
        th: '泰语',
        ara: '阿拉伯语',
        ru: '俄语',
        pt: '葡萄牙语',
        de: '德语',
        it: '意大利语',
        el: '希腊语',
        nl: '荷兰语',
        pl: '波兰语',
        bul: '保加利亚语',
        est: '爱沙尼亚语',
        dan: '丹麦语',
        fin: '芬兰语',
        cs: '捷克语',
        rom: '罗马尼亚语',
        slo: '斯洛文尼亚语',
        swe: '瑞典语',
        hu: '匈牙利语',
        cht: '繁体中文',
        vie: '越南语',
      },
      qWeather: '和风天气',
      qWeatherDescription:
        '该组件用于从 https://www.qweather.com/ 获取天气相关信息。您可以获取天气、指数、空气质量。',
      lang: '语言',
      type: '类型',
      webApiKey: 'Web API 密钥',
      userType: '用户类型',
      timePeriod: '时间段',
      qWeatherLangOptions: {
        zh: '简体中文',
        'zh-hant': '繁体中文',
        en: '英文',
        de: '德语',
        es: '西班牙语',
        fr: '法语',
        it: '意大利语',
        ja: '日语',
        ko: '韩语',
        ru: '俄语',
        hi: '印地语',
        th: '泰语',
        ar: '阿拉伯语',
        pt: '葡萄牙语',
        bn: '孟加拉语',
        ms: '马来语',
        nl: '荷兰语',
        el: '希腊语',
        la: '拉丁语',
        sv: '瑞典语',
        id: '印尼语',
        pl: '波兰语',
        tr: '土耳其语',
        cs: '捷克语',
        et: '爱沙尼亚语',
        vi: '越南语',
        fil: '菲律宾语',
        fi: '芬兰语',
        he: '希伯来语',
        is: '冰岛语',
        nb: '挪威语',
      },
      qWeatherTypeOptions: {
        weather: '天气预报',
        indices: '天气生活指数',
        airquality: '空气质量',
      },
      qWeatherUserTypeOptions: {
        free: '免费订阅用户',
        paid: '付费订阅用户',
      },
      qWeatherTimePeriodOptions: {
        now: '现在',
        '3d': '3天',
        '7d': '7天',
        '10d': '10天',
        '15d': '12天',
        '30d': '30天',
      },
      publish: 'API',
      exeSQL: 'ExeSQL',
      exeSQLDescription:
        '该组件通过SQL语句从相应的关系数据库中查询结果。支持MySQL，PostgreSQL，MariaDB。',
      dbType: '数据库类型',
      database: '数据库',
      username: '用户名',
      host: '主机',
      port: '端口',
      password: '密码',
      switch: '条件',
      logicalOperator: '操作符',
      switchOperatorOptions: {
        equal: '等于',
        notEqual: '不等于',
        gt: '大于',
        ge: '大于等于',
        lt: '小于',
        le: '小于等于',
        contains: '包含',
        notContains: '不包含',
        startWith: '开始是',
        endWith: '结束是',
        empty: '为空',
        notEmpty: '不为空',
      },
      switchLogicOperatorOptions: {
        and: '与',
        or: '或',
      },
      operator: '操作符',
      value: '值',
      useTemplate: '使用该模板',
      wenCai: '问财',
      queryType: '查询类型',
      wenCaiDescription:
        '该组件可用于获取广泛金融领域的信息，包括但不限于股票、基金等...',
      wenCaiQueryTypeOptions: {
        stock: '股票',
        zhishu: '指数',
        fund: '基金',
        hkstock: '港股',
        usstock: '美股',
        threeboard: '新三板',
        conbond: '可转债',
        insurance: '保险',
        futures: '期货',
        lccp: '理财',
        foreign_exchange: '外汇',
      },
      akShare: 'AkShare',
      akShareDescription: '该组件可用于从东方财富网站获取相应股票的新闻信息。',
      yahooFinance: '雅虎财经',
      yahooFinanceDescription: '该组件根据提供的股票代码查询有关公司的信息。',
      crawler: '网页爬虫',
      crawlerDescription: '该组件可用于从指定url爬取html源码。',
      proxy: '代理',
      crawlerResultOptions: {
        html: 'Html',
        markdown: 'Markdown',
        content: '文本',
      },
      extractType: '提取类型',
      info: '信息',
      history: '历史',
      financials: '财务',
      balanceSheet: '资产负债表',
      cashFlowStatement: '现金流量表',
      jin10: '金十',
      jin10Description:
        '该组件可用于从金十开放平台获取金融领域的信息，包括快讯、日历、行情、参考。',
      flashType: '闪光类型',
      filter: '筛选',
      contain: '包含',
      calendarType: '日历类型',
      calendarDatashape: '日历数据形状',
      symbolsDatatype: '符号数据类型',
      symbolsType: '符号类型',
      jin10TypeOptions: {
        flash: '快讯',
        calendar: '日历',
        symbols: '行情',
        news: '参考',
      },
      jin10FlashTypeOptions: {
        '1': '市场快讯',
        '2': '期货快讯',
        '3': '美港快讯',
        '4': 'A股快讯',
        '5': '商品外汇快讯',
      },
      jin10CalendarTypeOptions: {
        cj: '宏观数据日历',
        qh: '期货日历',
        hk: '港股日历',
        us: '美股日历',
      },
      jin10CalendarDatashapeOptions: {
        data: '数据',
        event: ' 事件',
        holiday: '假期',
      },
      jin10SymbolsTypeOptions: {
        GOODS: '商品行情',
        FOREX: '外汇行情',
        FUTURE: '国际行情',
        CRYPTO: '加密货币行情',
      },
      jin10SymbolsDatatypeOptions: {
        symbols: '品种列表',
        quotes: '最新行情',
      },
      concentrator: '集线器',
      concentratorDescription:
        '该组件可用于连接多个下游组件。它接收来自上游组件的输入并将其传递给每个下游组件。',
      tuShare: 'TuShare',
      tuShareDescription:
        '该组件可用于从主流金融网站获取金融新闻简报，辅助行业和量化研究。',
      tuShareSrcOptions: {
        sina: '新浪财经',
        wallstreetcn: '华尔街见闻',
        '10jqka': '同花顺',
        eastmoney: '东方财富',
        yuncaijing: '云财经',
        fenghuang: '凤凰新闻',
        jinrongjie: '金融界',
      },
      token: 'Token',
      src: '源',
      startDate: '开始日期',
      endDate: '结束日期',
      keyword: '关键字',
      note: '注释',
      noteDescription: '注释',
      notePlaceholder: '请输入注释',
      invoke: 'Invoke',
      invokeDescription:
        '该组件可以调用远程端点调用。将其他组件的输出作为参数或设置常量参数来调用远程函数。',
      url: 'Url',
      method: '方法',
      timeout: '超时',
      headers: '请求头',
      cleanHtml: '清除 HTML',
      cleanHtmlTip: '如果响应是 HTML 格式且只需要主要内容，请将其打开。',
      reference: '引用',
      input: '输入',
      output: '输出',
      parameter: '参数',
      howUseId: '如何使用Agent ID？',
      content: '内容',
      operationResults: '运行结果',
      autosaved: '已自动保存',
      optional: '可选项',
      pasteFileLink: '粘贴文件链接',
      testRun: '试运行',
      template: '模板转换',
      templateDescription:
        '该组件用于排版各种组件的输出。1、支持Jinja2模板,会先将输入转为对象后进行模版渲染2、同时保留原使用{参数}字符串替换的方式',
      emailComponent: '邮件',
      emailDescription: '发送邮件到指定邮箱',
      smtpServer: 'SMTP服务器',
      smtpPort: 'SMTP端口',
      senderEmail: '发件人邮箱',
      authCode: '授权码',
      senderName: '发件人名称',
      toEmail: '收件人邮箱',
      ccEmail: '抄送邮箱',
      emailSubject: '邮件主题',
      emailContent: '邮件内容',
      smtpServerRequired: '请输入SMTP服务器地址',
      senderEmailRequired: '请输入发件人邮箱',
      authCodeRequired: '请输入授权码',
      toEmailRequired: '请输入收件人邮箱',
      emailContentRequired: '请输入邮件内容',
      emailSentSuccess: '邮件发送成功',
      emailSentFailed: '邮件发送失败',
      dynamicParameters: '动态参数说明',
      jsonFormatTip: '上游组件需要传入以下格式的JSON字符串:',
      toEmailTip: 'to_email: 收件人邮箱(必填)',
      ccEmailTip: 'cc_email: 抄送邮箱(可选)',
      subjectTip: 'subject: 邮件主题(可选)',
      contentTip: 'content: 邮件内容(可选)',
      jsonUploadTypeErrorMessage: '请上传json文件',
      jsonUploadContentErrorMessage: 'json 文件错误',
      iteration: '循环',
      iterationDescription: `该组件首先将输入以“分隔符”分割成数组，然后依次对数组中的元素执行相同的操作步骤，直到输出所有结果，可以理解为一个任务批处理器。例如在长文本翻译迭代节点中，如果所有内容都输入到LLM节点，可能会达到单次对话的限制，上游节点可以先将长文本分割成多个片段，配合迭代节点对每个片段进行批量翻译，避免达到单次对话的LLM消息限制。`,
      delimiterTip: `该分隔符用于将输入文本分割成几个文本片段，每个文本片段的回显将作为每次迭代的输入项。`,
      delimiterOptions: {
        comma: '逗号',
        lineBreak: '换行',
        tab: '制表符',
        underline: '下划线',
        diagonal: '斜线',
        minus: '连字符',
        semicolon: '分号',
      },
      addCategory: '新增分类',
      categoryName: '分类名称',
      nextStep: '下一步',
      insertVariableTip: `输入 / 插入变量`,
      setting: '设置',
      settings: {
        agentSetting: 'Agent设置',
        title: '标题',
        description: '描述',
        upload: '上传',
        photo: '照片',
        permissions: '权限',
        permissionsTip: '你可以在这里设置团队访问权限。',
        me: '仅限自己',
        team: '团队',
      },
      systemPrompt: '系统提示词',
      prompt: '提示词',
      promptMessage: '提示词是必填项',
      promptTip:
        '系统提示为大模型提供任务描述、规定回复方式，以及设置其他各种要求。系统提示通常与 key （变量）合用，通过变量设置大模型的输入数据。你可以通过斜杠或者 (x) 按钮显示可用的 key。',
    },
    footer: {
      profile: 'All rights reserved @ React',
    },
    layout: {
      file: 'file',
      knowledge: 'knowledge',
      chat: 'chat',
    },
  },
};
