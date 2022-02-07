//global HTML elements

class GlobalAnchorTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="top-anchor"></div>
        `
    }
}

customElements.define('global-anchor-top', GlobalAnchorTop)

class GlobalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="top">
                <div id="container-top" class="container">
                    <div id="top-left" class="col-5">
                        <a class="header-link"><h1 id="name">
                            <span class="header-case-change">S</span><span class="header-case-change">E</span><span class="header-case-change">U</span><span class="header-case-change">L</span><span class="header-case-change">G</span><span class="header-case-change">E</span><span class="header-case-change">E</span> <span class="header-case-change">L</span><span class="header-case-change">E</span><span class="header-case-change">E</span>
                        </h1></a>
                    </div>
                    
                </div>
            </header>
        `
    }
}

customElements.define('global-header', GlobalHeader)

class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="bottom">
                <div class="container">
                    <div class="col-2-5">
                        <p class="text-footer">&#169; 2022 Designed & Developed by Seulgee Lee</p>
                    </div>
                    <div class="col-2-5">
                        <p class="bottom-left text-footer"><a href="mailto:seulgee.work@gmail.com" target="_blank">seulgee.work@gmail.com</a></p>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('global-footer', GlobalFooter)

//navigation

function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "nav-default") {
      x.className += " nav-responsive";
    } else {
      x.className = "nav-default";
    }
  }
