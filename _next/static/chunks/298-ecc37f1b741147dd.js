(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{4250:function(e,n,r){"use strict";r.d(n,{o:function(){return s}});var t=r(5893),i=r(8131),a=r.n(i);function s(e){var n=e.summary,r=e.children;return(0,t.jsxs)("details",{className:a().details,children:[(0,t.jsx)("summary",{className:a().summary,children:n}),(0,t.jsx)("div",{className:a().detailsContent,children:r})]})}},4789:function(e,n,r){"use strict";r.d(n,{G:function(){return o},t:function(){return c}});var t=r(4924),i=r(7294),a=r(4184),s=r.n(a),l=r(7911);function c(){return i.useContext(l.B)}function o(e,n){var r=c();if(r){var i=r.colorScheme,a=n+"--dark";return s()(e[n],(0,t.Z)({},e[a],"dark"===i))}return""}},1274:function(e,n,r){"use strict";r.d(n,{Z:function(){return _}});var t=r(5893),i=r(9008),a=r.n(i),s=r(1664),l=r.n(s),c=r(1163),o=r(1517),h=r(4789),d=r(888),u=r(5675),p=r.n(u),x=r(7760),m=r.n(x);function j(){var e=(0,h.t)();if(!e)return(0,t.jsx)(t.Fragment,{});var n=e.colorScheme,r=e.toggleColorScheme;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p(),{src:"/images/header/sun.svg",height:"32px",width:"32px"}),(0,t.jsx)("label",{className:m().toggleLabel,children:(0,t.jsx)(d.Z,{checked:"dark"===n,onChange:function(){return r()},icons:!1})}),(0,t.jsx)(p(),{src:"/images/header/moon.svg",height:"32px",width:"32px"})]})}var f=r(8514),g=r.n(f);function v(){return(0,t.jsx)(o.Z,{children:(0,t.jsxs)("nav",{className:g().nav,children:[(0,t.jsx)("div",{children:(0,t.jsx)("h1",{children:(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{children:"davimiku"})})})}),(0,t.jsxs)("ul",{className:g()["nav-links"],children:[(0,t.jsx)(b,{href:"/",linkText:"home"}),(0,t.jsx)(b,{href:"/projects",linkText:"projects"}),(0,t.jsx)(b,{href:"/blog",linkText:"blog"})]}),(0,t.jsx)("div",{className:g()["theme-container"],children:(0,t.jsx)(j,{})})]})})}function b(e){var n=e.href,r=e.linkText,i=(0,c.useRouter)().pathname===n?g()["nav-link-active"]:"";return(0,t.jsx)("li",{children:(0,t.jsx)(l(),{href:n,children:(0,t.jsx)("a",{className:i,children:r})})})}var w=r(4066),k=r.n(w);function _(e){var n=e.children,r=e.title,i=e.description,s=(0,h.G)(k(),"main");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"description",content:i}),(0,t.jsx)("title",{children:r}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/16x16.png"}),(0,t.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,t.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap",rel:"stylesheet"})]}),(0,t.jsx)(v,{}),(0,t.jsx)("main",{className:s,children:n})]})}},7298:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x},meta:function(){return u}});var t=r(5893),i=r(2962),a=new Map;a.set("Test","");var s=function(e){var n=e.title,r=a.get(n);return r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.PB,{openGraph:{images:[{url:"".concat("").concat(r),width:2048,height:1152,alt:"Featured image for ".concat(n)}]},twitter:{handle:"@aTwitterHandle",cardType:"summary_large_image"}}),(0,t.jsx)("img",{src:r})]}):null},l=r(1274),c=r(7346),o=r.n(c);function h(e){var n=e.children,r=e.meta,a=r.title,c=r.tagline;return(0,t.jsxs)(l.Z,{title:a,description:c,children:[(0,t.jsx)(i.PB,{title:a,description:c}),(0,t.jsxs)("article",{className:o().container,children:[(0,t.jsx)("h1",{children:a}),(0,t.jsx)("p",{children:c}),(0,t.jsx)(s,{title:a}),(0,t.jsx)("section",{children:n})]})]})}var d=r(4250),u={title:"Tutorial: Writing a JSON parser in Rust",category:"tutorials",slug:"json-parser-rust",tagline:"Learn the fundamentals of lexing and parsing to build a JSON parser from scratch",tags:["Lexers","Parsers","Rust"],publishedOn:"2022-03-27"},p=function(e){var n=e.children;return(0,t.jsx)(h,{meta:u,children:n})};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",strong:"strong",pre:"pre",h3:"h3",blockquote:"blockquote"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Understanding the JSON syntax and types"}),"\n",(0,t.jsx)(n.p,{children:"Types include"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["object (",(0,t.jsx)(n.code,{children:'{ "key": json_value }'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["array (",(0,t.jsx)(n.code,{children:"[ json_value, json_value ]"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["number (",(0,t.jsx)(n.code,{children:"2"}),", ",(0,t.jsx)(n.code,{children:"-2"}),", ",(0,t.jsx)(n.code,{children:"2.5"}),", ",(0,t.jsx)(n.code,{children:"2E+32"}),", ",(0,t.jsx)(n.code,{children:"2e-16"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["string (",(0,t.jsx)(n.code,{children:'"a string"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["boolean (",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"null"}),"\n"]}),"\n",(0,t.jsxs)(d.o,{summary:"JSON syntax is a subset of Javascript syntax",children:[(0,t.jsxs)(n.p,{children:["As of ES2019, JSON syntax is a subset of Javascript syntax when ",(0,t.jsx)(n.a,{href:"https://github.com/tc39/proposal-json-superset",children:"unicode characters\nU+2028 and U+2029"})," are allowed to exist in JS strings unescaped."]}),(0,t.jsxs)(n.p,{children:["JSON is not necessarily a ",(0,t.jsx)(n.strong,{children:"semantic"})," subset of Javascript. For example, the following produces a different result when\nparsed as Javascript vs. JSON."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const str = `[{ "__proto__": [] }]`\n\nconst fromJS = eval(str)\nconst fromJSON = JSON.parse(str)\n'})}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"fromJS"})," result is an array with one item, where that item is an Object that has Array as its prototype.\nThe ",(0,t.jsx)(n.code,{children:"fromJSON"})," result is also an array with one item, and that item is an Object who has an own property with\nan identifier of ",(0,t.jsx)(n.code,{children:"__proto__"})," (compare the result of ",(0,t.jsx)(n.code,{children:"Object.getOwnPropertyNames(x)"})," for each ",(0,t.jsx)(n.code,{children:"fromJS"})," and ",(0,t.jsx)(n.code,{children:"fromJSON"}),")."]})]}),"\n",(0,t.jsx)(n.h3,{children:"Defining the types for JSON values"}),"\n",(0,t.jsx)(n.p,{children:"Start with the easy values, the primitives:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'pub enum Value {\n  /// literal characters `null`\n  Null,\n\n  /// literal characters `true` or `false`\n  Bool(bool),\n\n  /// characters within double quotes "..."\n  String(String),\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Add on the non-primitives:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'pub enum Value {\n  /// literal characters `null`\n  Null,\n\n  /// literal characters `true` or `false`\n  Bool(bool),\n\n  /// characters within double quotes "..."\n  String(String),\n\n  /// Zero to many JSON values in an array\n  Array(Vec<Value>),\n\n  /// Key/value pairs\n  Object(BTreeMap<String, Value>),\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Quiz: Which value is missing?"}),"\n",(0,t.jsxs)(n.p,{children:["Number is not quite straightforward in Rust, the available types are more granular. While the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",children:"Number in Javascript"})," (and JSON!)\nrepresents a ",(0,t.jsx)(n.code,{children:"double"})," value, or in other words a 64-bit floating value as described in ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/IEEE_754",children:"IEEE 754"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For our purposes, we will explore how to capture JSON numbers in two ways, as an integer ",(0,t.jsx)(n.code,{children:"i64"})," and as a floating value ",(0,t.jsx)(n.code,{children:"f64"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub enum Number {\n  /// Number without a fractional component\n  Int(i64),\n\n  /// Number that has a fractional component\n  Float(f64),\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, add this enum to our overall ",(0,t.jsx)(n.code,{children:"Value"})," enum."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub enum Value {\n  // ...snip...\n\n  /// Number value\n  Number(Number),\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Writing the Lexer"}),"\n",(0,t.jsx)(n.h3,{children:"Creating the Token type"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[derive(Debug, PartialEq, Clone)]\npub enum TokenKind {\n    /// Literals\n    Int(i64),\n    Float(f64),\n    Null,\n    Bool(bool),\n\n    /// Key of the key/value pair or string value\n    String(String),\n\n    /// Punctuation\n    LeftBrace,\n    RightBrace,\n    LeftBracket,\n    RightBracket,\n    Comma,\n    Colon,\n\n    EOF,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["OPTIONAL: Implement ",(0,t.jsx)(n.code,{children:"Display"})," for the Token.\nThis will allow having a custom format for printing the token out, which can be useful for debugging."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'fn example_print(token: Token) {\n  // Requires `Display` to be implemented for Token\n  println!("{}", token);\n\n  // Requires `Debug` to be implemented for Token, which can be derived automatically\n  println!("{:?}", token);\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use std::fmt;\n\n// ...snip...\n\nimpl fmt::Display for TokenKind {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::FmtResult {\n        match self {\n            TokenKind::LeftBracket => f.write_char('['),\n            TokenKind::RightBracket => f.write_char(']'),\n            TokenKind::LeftBrace => f.write_char('{'),\n            TokenKind::RightBrace => f.write_char('}'),\n            TokenKind::Comma => f.write_char(','),\n            TokenKind::Colon => f.write_char(':'),\n            TokenKind::String(val) => write!(f, \"{:?}\", val),\n            TokenKind::Int(val) => write!(f, \"{:?}\", val),\n            TokenKind::Float(val) => write!(f, \"{:?}\", val),\n            TokenKind::Bool(val) => write!(f, \"{:?}\", val),\n            TokenKind::Null => f.write_str(\"null\"),\n            TokenKind::EOF => f.write_str(\"EOF\"),\n        }\n    }\n}\n\nimpl fmt::Display for Token {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        f.write_fmt(format_args!(\n            \"token '{}' at row {}, col {}\",\n            self.kind, self.location.row, self.location.col,\n        ))\n    }\n}\n\n"})}),"\n",(0,t.jsxs)(n.h3,{children:["Rust Traits: The ",(0,t.jsx)(n.code,{children:"Iterator"})]}),"\n",(0,t.jsxs)(n.p,{children:["We'll first start be defining the ",(0,t.jsx)(n.code,{children:"struct"})," for the Lexer, which will take the character input and output our ",(0,t.jsx)(n.code,{children:"Token"}),"s."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct Lexer<I: Iterator<Item = char>> {\n  /// Iterator for chars from the input\n  char_iter: I,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At first, this syntax can be confusing without much experience with Rust or other languages with generics. In this case, ",(0,t.jsx)(n.code,{children:"I"})," represents\na generic type parameter which can be anything is an ",(0,t.jsx)(n.code,{children:"Iterator"})," for ",(0,t.jsx)(n.code,{children:"char"}),"acters."]}),"\n",(0,t.jsx)(n.p,{children:"A more explicit (and semantically equivalent) way of writing this is below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub struct Lexer<I>\nwhere\n    I: Iterator<Item = char>,\n{\n  /// Iterator for chars from the input\n  char_iter: I,\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We'll want a few other fields in the lexer."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"/// The Lexer produces tokens from the character input\npub struct Lexer<I: Iterator<Item = char>> {\n    /// Iterator for chars from the input\n    char_iter: I,\n\n    /// Current Location (row/col) of the lexer in the input\n    location: Location,\n\n    /// The current character in the iterator\n    curr: Option<char>,\n\n    /// The next character in the iterator\n    next: Option<char>,\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Writing the Parser"}),"\n",(0,t.jsx)(n.h2,{children:"The nitty gritty"}),"\n",(0,t.jsx)(n.h3,{children:"Objects with duplicate keys"}),"\n",(0,t.jsx)(n.p,{children:"The RFC specifies that the names within an object SHOULD be unique,\nhttps://datatracker.ietf.org/doc/html/rfc8259"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An object whose names are all unique is interoperable in the sense\nthat all software implementations receiving that object will agree on\nthe name-value mappings. When the names within an object are not\nunique, the behavior of software that receives such an object is\nunpredictable. Many implementations report the last name/value pair\nonly. Other implementations report an error or fail to parse the\nobject, and some implementations report all of the name/value pairs,\nincluding duplicates."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const str = `{"a": 1, "a": 2}`\n\nconsole.log(JSON.parse(str)) // --\x3e { a: 2 }\n'})}),"\n",(0,t.jsx)(n.h3,{children:"Object Key Ordering"})]})};return p?(0,t.jsx)(p,Object.assign({},e,{children:(0,t.jsx)(n,{})})):n()}},8131:function(e){e.exports={details:"Spoiler_details__gotJo",detailsContent:"Spoiler_detailsContent__yhV_z",summary:"Spoiler_summary__6Nxkr"}},8514:function(e){e.exports={nav:"Header_nav__70yDD","nav-links":"Header_nav-links__w6Ltd","nav-link-active":"Header_nav-link-active__E_lS6","theme-container":"Header_theme-container__PGNgu"}},7760:function(e){e.exports={toggleLabel:"Toggle_toggleLabel__0bMk0"}},4066:function(e){e.exports={main:"Layout_main__gmMSA","main--dark":"Layout_main--dark__zjKmX"}},7346:function(e){e.exports={container:"blog_container__mTn9i"}}}]);