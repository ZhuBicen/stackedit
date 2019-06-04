
import extensionSvc from '../services/extensionSvc';
// import utils from '../services/utils';


const containerElt = document.createElement('div');
containerElt.className = 'hidden-rendering-container';
document.body.appendChild(containerElt);

const render = (elt) => {
  // const svgId = `mermaid-svg-${utils.uid()}`;
  const txt = elt.textContent;
  // eslint-disable-next-line
  console.log('plantuml content is:', txt);
  containerElt.innerHTML = '<img src="https://tse2-mm.cn.bing.net/th?id=OIP._Jdj1o8B8Ps0gWKnu8saTQHaE8&w=300&h=197&c=7&o=5&pid=1.7"/>';
  elt.parentNode.replaceChild(containerElt.firstChild, elt);
};

extensionSvc.onGetOptions((options, properties) => {
  options.mermaid = properties.extensions.mermaid.enabled;
});

extensionSvc.onSectionPreview((elt) => {
  elt.querySelectorAll('.prism.language-puml')
    .cl_each(diagramElt => render(diagramElt.parentNode));
});
