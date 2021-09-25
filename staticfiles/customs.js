function submitNRM() {
  console.log("Noor");
  let g = document.getElementById("gnrm").value;
  x = Number(g);
  let eq = document.getElementById("fnrm").value;
  let n = document.getElementById("nnrm").value;
  n = Number(n);
  let nrmdata = { x: x, eq: eq, n: n };
  console.log(nrmdata);
  let URL = "http://127.0.0.1:8000/user/nr/";
  let tname = "tabody";
  renderNR(nrmdata, URL, tname);
}
async function renderNR(ndata, url, tname) {
  console.log(ndata, url, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);
    let html = "";
    data.map((data) => {
      let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${data[0]}</td>
                <td>${data[1]}</td>
                <td>${data[2]}</td>
                <td>${data[3]}</td>
            </tr>
        </tbody>`;

      html += htmlSegment;
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errornrm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}











function submitFPIM() {
  let x = document.getElementById("gfpim").value;
  x = Number(x);
  let eq1 = document.getElementById("fpim").value;
  let eq2 = document.getElementById("dnrm").value;
  let n = document.getElementById("nfpim").value;
  n = Number(n);
  let tol = document.getElementById("efpim").value;
  tol = Number(tol);
  let fpimdata = { x: x, eq1: eq1, eq2: eq2, n: n, tol: tol };
  console.log(fpimdata);
  let URL = "http://127.0.0.1:8000/user/fpi/";
  let tname = "fiptabody";
  render(fpimdata, URL, tname);
}
async function render(ndata, url, tname) {
  console.log(ndata, url, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);
    let html = "";
    data.map((data) => {
      let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${data[0]}</td>
                <td>${data[1]}</td>
                <td>${data[2]}</td>
            </tr>
        </tbody>`;

      html += htmlSegment;
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorfpim");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}











function submitSM() {
  let x0 = document.getElementById("sg").value;
  x0 = parseFloat(x0);
  let eq = document.getElementById("sf").value;
  let n = document.getElementById("sn").value;
  n = Number(n);
  let tol = document.getElementById("se").value;
  tol = parseFloat(tol);
  let x1 = document.getElementById("sdf").value;
  x1 = parseFloat(x1);
  let smdata = { x0: x0, x1: x1, eq: eq, tol: tol, n: n };
  console.log(smdata);
  let URL = "http://127.0.0.1:8000/user/sm/";
  let tname = "Stabody";
  renderSM(smdata, URL, tname);
}
async function renderSM(ndata, url, tname) {
  console.log(ndata, url, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);
    let html = "";
    data.map((data) => {
      let htmlSegment = `<tbody id=${tname}>
              <tr>
                  <td>${data[0]}</td>
                  <td>${data[1]}</td>
                  <td>${data[2]}</td>
                  <td>${data[3]}</td>
                  <td>${data[4]}</td>
                  <td>${data[5]}</td>

              </tr>
          </tbody>`;

      html += htmlSegment;
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorsm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}












function submitBM() {
  let x0 = document.getElementById("bg").value;
  x0 = parseFloat(x0);
  let eq = document.getElementById("bf").value;
  let n = document.getElementById("bn").value;
  n = Number(n);
  let tol = document.getElementById("be").value;
  tol = parseFloat(tol);
  let x1 = document.getElementById("bdf").value;
  x1 = parseFloat(x1);
  let bmdata = { x0: x0, x1: x1, eq: eq, tol: tol, n: n };
  let URL = "http://127.0.0.1:8000/user/bm/";
  let tname = "BMtabody";
  renderBM(bmdata, URL, tname);
}
async function renderBM(ndata, url, tname) {
  console.log(ndata, url, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);
    let html = "";
    data.map((data) => {
      let htmlSegment = `<tbody id=${tname}>
              <tr>
                  <td>${data[0]}</td>
                  <td>${data[1]}</td>
                  <td>${data[2]}</td>
                  <td>${data[3]}</td>
                  <td>${data[4]}</td>
                  <td>${data[5]}</td>

              </tr>
          </tbody>`;

      html += htmlSegment;
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorbm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}




function submitRFM() {
  let x0 = document.getElementById("rfg").value;
  x0 = parseFloat(x0);
  let eq = document.getElementById("rff").value;
  let n = document.getElementById("rfn").value;
  n = Number(n);
  let tol = document.getElementById("rfe").value;
  tol = parseFloat(tol);
  let x1 = document.getElementById("rfdf").value;
  x1 = parseFloat(x1);
  let bmdata = { x0: x0, x1: x1, eq: eq, tol: tol, n: n };
  let URL = "http://127.0.0.1:8000/user/rfm/";
  let tname = "RFMtabody";
  renderRFM(bmdata, URL, tname);
}
async function renderRFM(ndata, url, tname) {
  console.log(ndata, url, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);
    let html = "";
    data.map((data) => {
      let htmlSegment = `<tbody id=${tname}>
              <tr>
                  <td>${data[0]}</td>
                  <td>${data[1]}</td>
                  <td>${data[2]}</td>
                  <td>${data[3]}</td>
                  <td>${data[4]}</td>
                  <td>${data[5]}</td>
              </tr>
          </tbody>`;

      html += htmlSegment;
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorrfm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}








function submitCTR() {
  console.log("noor");
  let x0 = document.getElementById("ctrl").value;
  x0 = parseFloat(x0);
  let eq = document.getElementById("ctrf").value;
  let n = document.getElementById("ctrn").value;
  n = Number(n);
  let xn = document.getElementById("ctrh").value;
  xn = parseFloat(xn);
  let ctrdata = { x0: x0, xn: xn, eq: eq, n: n };
  console.log(ctrdata);
  let URL = "http://127.0.0.1:8000/user/ctr/";
  let hname = "CTRtabody";
  Numericrender(ctrdata, URL, hname);
}
async function Numericrender(ndata, url, tname) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data1 = await response.json();
    let data = [data1];
    let html = "";
    data.map((data) => {
      data.map((val) => {
        let htmlSegment = `<tbody id=${tname}>
              <tr>
                  <td>${val[0]}</td>
                  <td>${val[1]}</td>
                  <td>${val[2]}</td>
              </tr>
          </tbody>`;

        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorctr");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}







function submitA() {
  console.log("noorA");
  let x0 = document.getElementById("ctral").value;
  x0 = parseFloat(x0);
  let eq = document.getElementById("ctraf").value;
  let n = document.getElementById("ctran").value;
  n = Number(n);
  let xn = document.getElementById("ctrah").value;
  xn = parseFloat(xn);
  let adata = { x0: x0, xn: xn, eq: eq, n: n };
  console.log(adata);
  let URL = "http://127.0.0.1:8000/user/csr3/";
  let hname = "Atabody";
  NumericrenderA(adata, URL, hname);
}
async function NumericrenderA(ndata, url, tname) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data1 = await response.json();
    let data = [data1];
    let html = "";
    data.map((data) => {
      data.map((val) => {
        let htmlSegment = `<tbody id=${tname}>
              <tr>
                  <td>${val[0]}</td>
                  <td>${val[1]}</td>
                  <td>${val[2]}</td>
              </tr>
          </tbody>`;

        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errora");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}










function submitB() {
  console.log("noorB");
  let x0 = document.getElementById("tbl").value;
  x0 = parseFloat(x0);
  let eq = document.getElementById("tbf").value;
  let n = document.getElementById("tbn").value;
  n = Number(n);
  let xn = document.getElementById("tbh").value;
  xn = parseFloat(xn);
  let bdata = { x0: x0, xn: xn, eq: eq, n: n };
  console.log(bdata);
  let URL = "http://127.0.0.1:8000/user/csr8/";
  let hname = "Btabody";
  NumericrenderB(bdata, URL, hname);
}
async function NumericrenderB(ndata, url, tname) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data1 = await response.json();
    let data = [data1];
    let html = "";
    data.map((data) => {
      data.map((val) => {
        let htmlSegment = `<tbody id=${tname}>
              <tr>
                  <td>${val[0]}</td>
                  <td>${val[1]}</td>
                  <td>${val[2]}</td>
              </tr>
          </tbody>`;

        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorb");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html  }
}













function submitSONDDI() {
  console.log("submitSONDDI");
  let x = document.getElementById("sonx").value;
  let xarr = x.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  let f = document.getElementById("sonf").value;
  let farr = f.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  let xp = document.getElementById("sonxp").value;
  xp = parseFloat(xp);
  let sondata = { x: xarr, xp: xp, f: farr };
  let URL = "http://127.0.0.1:8000/user/sod/";
  let hname = "h2son";
  NumericrenderSONDDI(sondata, URL, hname);
}
async function NumericrenderSONDDI(ndata, url, hname) {
  try {
      const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(ndata),
          headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const data = await response.json();
      let html = "";
      let htmlSegment = `<div id=${hname}>
         <h2>${data.out}</h2
      </div>`;
      html += htmlSegment;
      let hbody = document.getElementById(hname);
      hbody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorsonddi");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}


















function submitNDDI() {
  let x = document.getElementById("nddix").value;
  let xarr = x.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  console.log(xarr);
  let f = document.getElementById("nddif").value;
  let farr = f.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  let xp = document.getElementById("nddixp").value;
  xp = parseFloat(xp);
  let nddidata = { x: xarr, xp: xp, f: farr };
  let URL = "http://127.0.0.1:8000/user/ndi/";
  let hname = "h2nddi";
  NumericrenderNDDI(nddidata, URL, hname);
}
async function NumericrenderNDDI(ndata, url, hname) {
  try {
      const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(ndata),
          headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const data = await response.json();
      let html = "";
      let htmlSegment = `<div id=${hname}>
         <h2>${data.out}</h2
      </div>`;
      html += htmlSegment;
      let hbody = document.getElementById(hname);
      hbody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errornddi");
    console.log(err)
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}





function submitJM() {
  let sys = document.getElementById("jmsys").value;
  let eq = document.getElementById("jmeq").value;
  let tol = document.getElementById("ejb").value;
  tol = parseFloat(tol);
  let n = document.getElementById("maxjb").value;
  n = Number(n);
  let jmdata = { sym: sys, eq: eq, tol: tol, n: n };
  console.log(jmdata);
  let URL = "http://127.0.0.1:8000/user/jm/";
  let tname = "JMtabody";
  Iterativerender(jmdata, URL, tname);
}
async function Iterativerender(ndata, url, tname) {
  console.log(ndata, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data1 = await response.json();

    let data = [data1];
    console.log(data);
    let html = "";
    data.map((data) => {
      data.map((val) => {
        console.log(val[0]);
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${val[0]}</td>
                <td>${val[1]}</td>
                <td>${val[2]}</td>
                <td>${val[3]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorjm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}

















function submitGSM() {
  let sys = document.getElementById("gsmsys").value;
  let eq = document.getElementById("gsmeq").value;
  let tol = document.getElementById("egsm").value;
  tol = parseFloat(tol);
  let n = document.getElementById("maxgsm").value;
  n = Number(n);
  let gsmdata = { sym: sys, eq: eq, tol: tol, n: n };
  console.log(gsmdata);
  let URL = "http://127.0.0.1:8000/user/gsm/";
  let tname = "GSMtabody";
  IterativerenderGSM(gsmdata, URL, tname);
}
async function IterativerenderGSM(ndata, url, tname) {
  console.log(ndata, tname);
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data1 = await response.json();

    let data = [data1];
    console.log(data);
    let html = "";
    data.map((data) => {
      data.map((val) => {
        console.log(val[0]);
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${val[0]}</td>
                <td>${val[1]}</td>
                <td>${val[2]}</td>
                <td>${val[3]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorgsm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}











function submitGEM() {
  let sys = document.getElementById("gemsys").value;
  let eq = document.getElementById("gemeq").value;
  let gemdata = { sym: sys, eq: eq };
  let URL = "http://127.0.0.1:8000/user/gem/";
  let tname = "GEMtabody";
  Eignrender(gemdata, URL, tname);
}
async function Eignrender(ndata, url, tname) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    let html = "";
    data.map((data, i) => {
      if (i === 0) {
        let htmlSegment = `<tbody id=${tname}>
        <tr>
            <td>${data[0]}</td>
            <td>${data[1]}</td>
            <td>${data[2]}</td>
        </tr>
    </tbody>`;
        html += htmlSegment;
        data.shift();
        data.shift();
        data.shift();
      }
      data.map((val) => {
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${val[0]}</td>
                <td>${val[1]}</td>
                <td>${val[2]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorgem");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}
















function submitDM() {
  let sys = document.getElementById("dmsys").value;
  let eq = document.getElementById("dmeq").value;
  let dmdata = { sym: sys, eq: eq };
  let URL = "http://127.0.0.1:8000/user/dm/";
  let tname = "DMtabody";
  Directrender(dmdata, URL, tname);
}
async function Directrender(ndata, url, tname) {
  console.log(ndata,url,tname)
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);

    let html = "";
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${data[0]}</td>
                <td>${data[1]}</td>
                <td>${data[2]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
    let tabody = document.getElementById(tname);
    console.log(tabody)
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errordm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}




















function submitCM() {
  let sys = document.getElementById("cmsys").value;
  let eq = document.getElementById("cmeq").value;
  let cmdata = { sym: sys, eq: eq };
  console.log(cmdata)
  let URL = "http://127.0.0.1:8000/user/cm/";
  let tname = "CMtabody";
  DirectrenderCM(cmdata, URL, tname);
}
async function DirectrenderCM(ndata, url, tname) {
  console.log(ndata,url,tname)
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);

    let html = "";
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${data[0]}</td>
                <td>${data[1]}</td>
                <td>${data[2]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
    let tabody = document.getElementById(tname);
    console.log(tabody)
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorcm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}













function submitPM() {
  let sys = document.getElementById("pmsys").value;
  let eq = document.getElementById("pmeq").value;
  let pmdata = { sym: sys, eq: eq };
  let URL = "http://127.0.0.1:8000/user/ev/";
  let tname = "PMtabody";
  Eignrender(pmdata, URL, tname);
}
async function Eignrender(ndata, url, tname) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    let html = "";
    data.map((data, i) => {
      if (i === 0) {
        let htmlSegment = `<tbody id=${tname}>
        <tr>
            <td>${data[0]}</td>
            <td>${data[1]}</td>
            <td>${data[2]}</td>
        </tr>
    </tbody>`;
        html += htmlSegment;
        data.shift();
        data.shift();
        data.shift();
      }
      data.map((val) => {
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${val[0]}</td>
                <td>${val[1]}</td>
                <td>${val[2]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
      });
    });
    let tabody = document.getElementById(tname);
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorpm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}




























function submitCSM() {
  let sys = document.getElementById("csmsys").value;
  let eq = document.getElementById("csmeq").value;
  let csmdata = { sym: sys, eq: eq };
  console.log(csmdata)
  let URL = "http://127.0.0.1:8000/user/chm/";
  let tname = "CSMtabody";
  DirectrenderCSM(csmdata, URL, tname);
}
async function DirectrenderCSM(ndata, url, tname) {
  console.log(ndata,url,tname)
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ndata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);

    let html = "";
        let htmlSegment = `<tbody id=${tname}>
            <tr>
                <td>${data[0]}</td>
                <td>${data[1]}</td>
                <td>${data[2]}</td>
            </tr>
        </tbody>`;
        html += htmlSegment;
    let tabody = document.getElementById(tname);
    console.log(tabody)
    tabody.innerHTML = html;
  } catch (e) {
    let html = "";
    let err = document.getElementById("errorcsm");
    let htmlSegment = `<div id=${err}>
            <ol>
            <li>Expression is wrong</li>
            <li>Make sure Expression  evaluates to finite  value at given guess values</li>
            </ol>
        </div>`;
    html += htmlSegment;
    err.innerHTML=html
  }
}











window.onload = function () {
  var NRM = document.getElementById("NRM");
  var FPIM = document.getElementById("FPIM");
  var RFM = document.getElementById("RFM");
  var BM = document.getElementById("BM");
  var SM = document.getElementById("SM");
  var SONDDI = document.getElementById("SONDDI");
  var NDDI = document.getElementById("NDDI");
  var CTR = document.getElementById("CTR");
  var A = document.getElementById("A");
  var B = document.getElementById("B");
  var JM = document.getElementById("JM");
  var GSM = document.getElementById("GSM");
  var GEM = document.getElementById("GEM");
  var DM = document.getElementById("DM");
  var CM = document.getElementById("CM");
  var CSM = document.getElementById("CSM");
  var PM = document.getElementById("PM");
  var mathNRM = document.getElementById("mathNRM");
  NRM.style.display = "flex";
  FPIM.style.display = "none";
  RFM.style.display = "none";
  BM.style.display = "none";
  SM.style.display = "none";
  SONDDI.style.display = "none";
  NDDI.style.display = "none";
  CTR.style.display = "none";
  A.style.display = "none";
  B.style.display = "none";
  JM.style.display = "none";
  GSM.style.display = "none";
  GEM.style.display = "none";
  DM.style.display = "none";
  CM.style.display = "none";
  CSM.style.display = "none";
  PM.style.display = "none";
  mathNRM.style.display = "none";
};
function mathNRM_() {
  mathNRM.style.display = "block";
}
function closeNRM_() {
  mathNRM.style.display = "none";
}

function NRM_() {
  if (NRM.style.display === "none") {
    NRM.style.display = "flex";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function FPIM_() {
  if (FPIM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "flex";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function RFM_() {
  if (RFM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "flex";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function BM_() {
  if (BM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "flex";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function SM_() {
  if (SM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "flex";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function SONDDI_() {
  if (SONDDI.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "flex";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function NDDI_() {
  if (NDDI.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "flex";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function CTR_() {
  if (CTR.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "flex";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function A_() {
  if (A.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "flex";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function B_() {
  if (B.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "flex";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function JM_() {
  if (JM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "flex";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function GSM_() {
  if (GSM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "flex";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function GEM_() {
  if (GEM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "flex";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function DM_() {
  if (DM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "flex";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function CM_() {
  if (CM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "flex";
    CSM.style.display = "none";
    PM.style.display = "none";
  }
}
function CSM_() {
  if (CSM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "flex";
    PM.style.display = "none";
  }
}
function PM_() {
  if (PM.style.display === "none") {
    NRM.style.display = "none";
    FPIM.style.display = "none";
    RFM.style.display = "none";
    BM.style.display = "none";
    SM.style.display = "none";
    SONDDI.style.display = "none";
    NDDI.style.display = "none";
    CTR.style.display = "none";
    A.style.display = "none";
    B.style.display = "none";
    JM.style.display = "none";
    GSM.style.display = "none";
    GEM.style.display = "none";
    DM.style.display = "none";
    CM.style.display = "none";
    CSM.style.display = "none";
    PM.style.display = "flex";
  }
}
