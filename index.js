const inputArea = document.getElementById('input-area');
    const resultArea = document.getElementById('result');
    const solutionSteps = document.getElementById('solution-steps');
    const triangleDiagram = document.getElementById('triangle-diagram');
    let currentUnit = 'deg';
  
    function setUnit(unit) {
      currentUnit = unit;
      document.getElementById('deg-btn').classList.toggle('active', unit === 'deg');
      document.getElementById('rad-btn').classList.toggle('active', unit === 'rad');
    }
  
    function updateInputs() {
      const selected = document.getElementById('example-select').value;
      let html = '';
  
      if (selected.includes('side-') || selected.includes('angle-')) {
        triangleDiagram.style.display = 'block';
      } else {
        triangleDiagram.style.display = 'none';
      }
  
      if (selected === 'sin') {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula for sin:</label>
            <select id="formula-select" onchange="showAngleInput('sin')">
              <option value="">Select a formula</option>
              <option value="basic">Basic (angle)</option>
              <option value="ratio">Ratio (e.g. opp/hyp)</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (selected === 'cos') {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula for cos:</label>
            <select id="formula-select" onchange="showAngleInput('cos')">
              <option value="">Select a formula</option>
              <option value="basic">Basic (angle)</option>
              <option value="ratio">Ratio (e.g. adj/hyp)</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (selected === 'tan') {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula for tan:</label>
            <select id="formula-select" onchange="showAngleInput('tan')">
              <option value="">Select a formula</option>
              <option value="basic">Basic (angle)</option>
              <option value="ratio">Ratio (e.g. opp/adj)</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (selected === 'csc') {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula for csc:</label>
            <select id="formula-select" onchange="showAngleInput('csc')">
              <option value="">Select a formula</option>
              <option value="basic">Basic (angle)</option>
              <option value="ratio">Ratio (e.g. hyp/opp)</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (selected === 'sec') {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula for sec:</label>
            <select id="formula-select" onchange="showAngleInput('sec')">
              <option value="">Select a formula</option>
              <option value="basic">Basic (angle)</option>
              <option value="ratio">Ratio (e.g. hyp/adj)</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (selected === 'cot') {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula for cot:</label>
            <select id="formula-select" onchange="showAngleInput('cot')">
              <option value="">Select a formula</option>
              <option value="basic">Basic (angle)</option>
              <option value="ratio">Ratio (e.g. adj/opp)</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (["side-a", "side-b", "side-c"].includes(selected)) {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula:</label>
            <select id="formula-select" onchange="showSideInputs('${selected}')">
              <option value="">Select a formula</option>
              <option value="law-of-sines">Law of Sines</option>
              <option value="law-of-cosines">Law of Cosines</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      } else if (["angle-a", "angle-b", "angle-c"].includes(selected)) {
        html += `
          <div class="input-group">
            <label for="formula-select">Choose formula:</label>
            <select id="formula-select" onchange="showAngleInputs('${selected}')">
              <option value="">Select a formula</option>
              <option value="law-of-sines">Law of Sines</option>
              <option value="cos-rule">Cosine Rule</option>
            </select>
          </div>
          <div id="formula-inputs"></div>
        `;
      }
  
      inputArea.innerHTML = html;
      solutionSteps.style.display = 'none';
    }
  
    function showAngleInput(func) {
      const selected = document.getElementById('formula-select').value;
      const inputs = document.getElementById('formula-inputs');
  
      if (selected === 'basic') {
        inputs.innerHTML = `
          <label for="angle">Angle (${currentUnit === 'deg' ? '°' : 'rad'}):</label>
          <input type="number" id="angle" />
        `;
      } else if (selected === 'ratio') {
        let ratioInputs = '';
        switch (func) {
          case 'sin':
            ratioInputs = `
              <label for="opp">Opposite:</label>
              <input type="number" id="opp" />
              <label for="hyp">Hypotenuse:</label>
              <input type="number" id="hyp" />
            `;
            break;
          case 'cos':
            ratioInputs = `
              <label for="adj">Adjacent:</label>
              <input type="number" id="adj" />
              <label for="hyp">Hypotenuse:</label>
              <input type="number" id="hyp" />
            `;
            break;
          case 'tan':
            ratioInputs = `
              <label for="opp">Opposite:</label>
              <input type="number" id="opp" />
              <label for="adj">Adjacent:</label>
              <input type="number" id="adj" />
            `;
            break;
          case 'csc':
            ratioInputs = `
              <label for="hyp">Hypotenuse:</label>
              <input type="number" id="hyp" />
              <label for="opp">Opposite:</label>
              <input type="number" id="opp" />
            `;
            break;
          case 'sec':
            ratioInputs = `
              <label for="hyp">Hypotenuse:</label>
              <input type="number" id="hyp" />
              <label for="adj">Adjacent:</label>
              <input type="number" id="adj" />
            `;
            break;
          case 'cot':
            ratioInputs = `
              <label for="adj">Adjacent:</label>
              <input type="number" id="adj" />
              <label for="opp">Opposite:</label>
              <input type="number" id="opp" />
            `;
            break;
        }
  
        inputs.innerHTML = ratioInputs + `<div class="error-message" id="ratio-error"></div>`;
      }
    }
  
    function showSideInputs(side) {
      const formula = document.getElementById('formula-select').value;
      const inputs = document.getElementById('formula-inputs');
  
      if (formula === 'law-of-sines') {
        inputs.innerHTML = `
          <label for="known-angle">Known Angle (${currentUnit === 'deg' ? '°' : 'rad'}):</label>
          <input type="number" id="known-angle" />
          <label for="known-side">Known Side:</label>
          <input type="number" id="known-side" />
          <label for="target-angle">Target Angle (${currentUnit === 'deg' ? '°' : 'rad'}):</label>
          <input type="number" id="target-angle" />
          <div class="error-message" id="sines-error"></div>
        `;
      } else if (formula === 'law-of-cosines') {
        let labelA = '', labelB = '';
        if (side === 'side-a') {
          labelA = 'Side b'; labelB = 'Side c';
        } else if (side === 'side-b') {
          labelA = 'Side a'; labelB = 'Side c';
        } else if (side === 'side-c') {
          labelA = 'Side a'; labelB = 'Side b';
        }

        inputs.innerHTML = `
          <label for="side1">${labelA}:</label>
          <input type="number" id="side1" />
          <label for="side2">${labelB}:</label>
          <input type="number" id="side2" />
          <label for="angle">Included Angle (${currentUnit === 'deg' ? '°' : 'rad'}):</label>
          <input type="number" id="angle" />
          <div class="error-message" id="cosines-error"></div>
        `;
      }
    }

    function showAngleInputs(angle) {
      const formula = document.getElementById('formula-select').value;
      const inputs = document.getElementById('formula-inputs');

      if (formula === 'law-of-sines') {
        inputs.innerHTML = `
          <label for="known-angle">Known Angle (${currentUnit === 'deg' ? '°' : 'rad'}):</label>
          <input type="number" id="known-angle" />
          <label for="known-side">Known Side:</label>
          <input type="number" id="known-side" />
          <label for="target-side">Target Side:</label>
          <input type="number" id="target-side" />
          <div class="error-message" id="sines-angle-error"></div>
        `;
      } else if (formula === 'cos-rule') {
        inputs.innerHTML = `
          <label for="side-a">Side a:</label>
          <input type="number" id="side-a" />
          <label for="side-b">Side b:</label>
          <input type="number" id="side-b" />
          <label for="side-c">Side c:</label>
          <input type="number" id="side-c" />
          <div class="error-message" id="cos-rule-error"></div>
        `;
      }
    }

    function validateTriangleSides(a, b, c) {
      return a + b > c && a + c > b && b + c > a;
    }

    function validateAngles(A, B, C) {
      if (currentUnit === 'deg') {
        return A + B + C <= 180;
      } else {
        return A + B + C <= Math.PI;
      }
    }

    function toRadians(angle) {
      return currentUnit === 'deg' ? angle * Math.PI / 180 : angle;
    }

    function fromRadians(angle) {
      return currentUnit === 'deg' ? angle * 180 / Math.PI : angle;
    }

    function calculateTrig() {
      const selected = document.getElementById('example-select').value;
      const formula = document.getElementById('formula-select')?.value;
      let result = '';
      let steps = [];
      
      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      try {
        if (['sin', 'cos', 'tan', 'csc', 'sec', 'cot'].includes(selected)) {
          if (formula === 'basic') {
            const angle = parseFloat(document.getElementById('angle').value);
            if (isNaN(angle)) {
              throw new Error("Please enter a valid angle");
            }
            
            const radians = currentUnit === 'deg' ? angle * Math.PI / 180 : angle;
            steps.push(`Converted angle: ${angle}${currentUnit === 'deg' ? '°' : 'rad'} = ${radians.toFixed(4)} radians`);
            
            switch (selected) {
              case 'sin': 
                result = Math.sin(radians); 
                steps.push(`sin(${radians.toFixed(4)}) = ${result.toFixed(4)}`);
                break;
              case 'cos': 
                result = Math.cos(radians); 
                steps.push(`cos(${radians.toFixed(4)}) = ${result.toFixed(4)}`);
                break;
              case 'tan': 
                if (Math.cos(radians) === 0) throw new Error("Tangent undefined for this angle");
                result = Math.tan(radians); 
                steps.push(`tan(${radians.toFixed(4)}) = sin/cos = ${result.toFixed(4)}`);
                break;
              case 'csc': 
                if (Math.sin(radians) === 0) throw new Error("Cosecant undefined for this angle");
                result = 1 / Math.sin(radians); 
                steps.push(`csc(${radians.toFixed(4)}) = 1/sin = ${result.toFixed(4)}`);
                break;
              case 'sec': 
                if (Math.cos(radians) === 0) throw new Error("Secant undefined for this angle");
                result = 1 / Math.cos(radians); 
                steps.push(`sec(${radians.toFixed(4)}) = 1/cos = ${result.toFixed(4)}`);
                break;
              case 'cot': 
                if (Math.tan(radians) === 0) throw new Error("Cotangent undefined for this angle");
                result = 1 / Math.tan(radians); 
                steps.push(`cot(${radians.toFixed(4)}) = 1/tan = ${result.toFixed(4)}`);
                break;
            }
          } else if (formula === 'ratio') {
            const opp = parseFloat(document.getElementById('opp')?.value);
            const adj = parseFloat(document.getElementById('adj')?.value);
            const hyp = parseFloat(document.getElementById('hyp')?.value);
            
            // Validate right triangle if all three sides are provided
            if (hyp && opp && adj) {
              const calculatedHyp = Math.sqrt(opp*opp + adj*adj);
              if (Math.abs(hyp - calculatedHyp) > 0.001) {
                document.getElementById('ratio-error').textContent = 
                  "Warning: These sides don't form a perfect right triangle (Pythagorean theorem fails)";
              }
            }
            
            if (selected === 'sin' && hyp && opp) {
              if (hyp === 0) throw new Error("Hypotenuse cannot be zero");
              result = opp / hyp;
              steps.push(`sin(θ) = opposite/hypotenuse = ${opp}/${hyp} = ${result.toFixed(4)}`);
            } 
            else if (selected === 'cos' && hyp && adj) {
              if (hyp === 0) throw new Error("Hypotenuse cannot be zero");
              result = adj / hyp;
              steps.push(`cos(θ) = adjacent/hypotenuse = ${adj}/${hyp} = ${result.toFixed(4)}`);
            }
            else if (selected === 'tan' && adj && opp) {
              if (adj === 0) throw new Error("Adjacent side cannot be zero");
              result = opp / adj;
              steps.push(`tan(θ) = opposite/adjacent = ${opp}/${adj} = ${result.toFixed(4)}`);
            }
            else if (selected === 'csc' && opp && hyp) {
              if (opp === 0) throw new Error("Opposite side cannot be zero");
              result = hyp / opp;
              steps.push(`csc(θ) = hypotenuse/opposite = ${hyp}/${opp} = ${result.toFixed(4)}`);
            }
            else if (selected === 'sec' && adj && hyp) {
              if (adj === 0) throw new Error("Adjacent side cannot be zero");
              result = hyp / adj;
              steps.push(`sec(θ) = hypotenuse/adjacent = ${hyp}/${adj} = ${result.toFixed(4)}`);
            }
            else if (selected === 'cot' && opp && adj) {
              if (opp === 0) throw new Error("Opposite side cannot be zero");
              result = adj / opp;
              steps.push(`cot(θ) = adjacent/opposite = ${adj}/${opp} = ${result.toFixed(4)}`);
            }
            else {
              throw new Error("Please enter the required values for this calculation");
            }
          }
        } 
        else if (['side-a', 'side-b', 'side-c'].includes(selected)) {
          if (formula === 'law-of-sines') {
            const A = parseFloat(document.getElementById('known-angle').value);
            const a = parseFloat(document.getElementById('known-side').value);
            const B = parseFloat(document.getElementById('target-angle').value);
            
            if (isNaN(A) || isNaN(a) || isNaN(B)) {
              throw new Error("Please enter all required values");
            }
            
            const A_rad = toRadians(A);
            const B_rad = toRadians(B);
            
            steps.push(`Law of Sines: a/sin(A) = b/sin(B)`);
            steps.push(`Given: a = ${a}, A = ${A}${currentUnit === 'deg' ? '°' : 'rad'}, B = ${B}${currentUnit === 'deg' ? '°' : 'rad'}`);
            steps.push(`Calculating: b = (a * sin(B)) / sin(A)`);
            steps.push(`b = (${a} * sin(${B_rad.toFixed(4)})) / sin(${A_rad.toFixed(4)})`);
            
            result = (a * Math.sin(B_rad)) / Math.sin(A_rad);
            
            steps.push(`b = ${(a * Math.sin(B_rad)).toFixed(4)} / ${Math.sin(A_rad).toFixed(4)} = ${result.toFixed(4)}`);
          } 
          else if (formula === 'law-of-cosines') {
            const b = parseFloat(document.getElementById('side1').value);
            const c = parseFloat(document.getElementById('side2').value);
            const A = parseFloat(document.getElementById('angle').value);
            
            if (isNaN(b) || isNaN(c) || isNaN(A)) {
              throw new Error("Please enter all required values");
            }
            
            const A_rad = toRadians(A);
            
            steps.push(`Law of Cosines: a² = b² + c² - 2bc*cos(A)`);
            steps.push(`Given: b = ${b}, c = ${c}, A = ${A}${currentUnit === 'deg' ? '°' : 'rad'}`);
            steps.push(`Calculating: a = sqrt(${b}² + ${c}² - 2*${b}*${c}*cos(${A_rad.toFixed(4)}))`);
            
            result = Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(A_rad));
            
            steps.push(`a = sqrt(${(b*b).toFixed(4)} + ${(c*c).toFixed(4)} - ${(2*b*c*Math.cos(A_rad)).toFixed(4)})`);
            steps.push(`a = sqrt(${(b*b + c*c - 2*b*c*Math.cos(A_rad)).toFixed(4)}) = ${result.toFixed(4)}`);
          }
        } 
        else if (['angle-a', 'angle-b', 'angle-c'].includes(selected)) {
          if (formula === 'law-of-sines') {
            const A = parseFloat(document.getElementById('known-angle').value);
            const a = parseFloat(document.getElementById('known-side').value);
            const b = parseFloat(document.getElementById('target-side').value);
            
            if (isNaN(A) || isNaN(a) || isNaN(b)) {
              throw new Error("Please enter all required values");
            }
            
            if (a === 0 || b === 0) {
              throw new Error("Sides cannot be zero");
            }
            
            const A_rad = toRadians(A);
            
            steps.push(`Law of Sines: a/sin(A) = b/sin(B)`);
            steps.push(`Given: a = ${a}, A = ${A}${currentUnit === 'deg' ? '°' : 'rad'}, b = ${b}`);
            steps.push(`Calculating: sin(B) = (b * sin(A)) / a`);
            steps.push(`sin(B) = (${b} * sin(${A_rad.toFixed(4)})) / ${a}`);
            
            const sinB = (b * Math.sin(A_rad)) / a;
            
            if (Math.abs(sinB) > 1) {
              throw new Error("No solution exists (sin(B) > 1)");
            }
            
            steps.push(`sin(B) = ${(b * Math.sin(A_rad)).toFixed(4)} / ${a} = ${sinB.toFixed(4)}`);
            
            const B_rad = Math.asin(sinB);
            result = fromRadians(B_rad);
            
            steps.push(`B = arcsin(${sinB.toFixed(4)}) = ${B_rad.toFixed(4)} radians = ${result.toFixed(4)}${currentUnit === 'deg' ? '°' : 'rad'}`);
          } 
          else if (formula === 'cos-rule') {
            const a = parseFloat(document.getElementById('side-a').value);
            const b = parseFloat(document.getElementById('side-b').value);
            const c = parseFloat(document.getElementById('side-c').value);
            
            if (isNaN(a) || isNaN(b) || isNaN(c)) {
              throw new Error("Please enter all three sides");
            }
            
            if (!validateTriangleSides(a, b, c)) {
              throw new Error("These sides don't form a valid triangle (sum of any two sides must be greater than the third)");
            }
            
            steps.push(`Cosine Rule: cos(A) = (b² + c² - a²) / (2bc)`);
            steps.push(`Given: a = ${a}, b = ${b}, c = ${c}`);
            steps.push(`Calculating: cos(A) = (${b}² + ${c}² - ${a}²) / (2*${b}*${c})`);
            
            const cosA = (b*b + c*c - a*a) / (2 * b * c);
            
            // Handle floating point precision issues
            const clampedCosA = Math.max(-1, Math.min(1, cosA));
            if (Math.abs(cosA - clampedCosA) > 0.0001) {
              steps.push(`Note: Adjusted cos(A) from ${cosA.toFixed(6)} to ${clampedCosA.toFixed(6)} due to floating point precision`);
            }
            
            steps.push(`cos(A) = (${(b*b).toFixed(4)} + ${(c*c).toFixed(4)} - ${(a*a).toFixed(4)}) / ${(2*b*c).toFixed(4)}`);
            steps.push(`cos(A) = ${(b*b + c*c - a*a).toFixed(4)} / ${(2*b*c).toFixed(4)} = ${clampedCosA.toFixed(4)}`);
            
            const A_rad = Math.acos(clampedCosA);
            result = fromRadians(A_rad);
            
            steps.push(`A = arccos(${clampedCosA.toFixed(4)}) = ${A_rad.toFixed(4)} radians = ${result.toFixed(4)}${currentUnit === 'deg' ? '°' : 'rad'}`);
          }
        }
        
        resultArea.innerHTML = `<strong>Result:</strong> ${result.toFixed(4)}${selected.includes('angle') ? currentUnit === 'deg' ? '°' : 'rad' : ''}`;
        
        // Show solution steps
        if (steps.length > 0) {
          solutionSteps.innerHTML = `<strong>Solution Steps:</strong><br>` + steps.join('<br>');
          solutionSteps.style.display = 'block';
        }
      } 
      catch (e) {
        resultArea.innerHTML = `<span style="color:red;">Error: ${e.message}</span>`;
        console.error(e);
      }
    }

    function clearResult() {
      resultArea.innerHTML = '';
      inputArea.innerHTML = '';
      solutionSteps.style.display = 'none';
      document.getElementById('example-select').value = 'none';
      triangleDiagram.style.display = 'none';
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    }

    // Formula popup functions
    function showFormula(func) {
      const container = document.getElementById('contentContainer');
      const formulaElement = document.getElementById(`${func}Formula`);
      
      container.style.display = 'flex';
      formulaElement.style.display = 'flex';
    }

    function hideFormula(func) {
      const container = document.getElementById('contentContainer');
      const formulaElement = document.getElementById(`${func}Formula`);
      
      container.style.display = 'none';
      formulaElement.style.display = 'none';
    }

    function showLaw(law) {
    const container = document.getElementById('contentContainer');
    const lawElement = document.getElementById(`${law}Law`);
    
    // Hide all formula popups first
    document.querySelectorAll('.trgFncForm').forEach(form => {
      form.style.display = 'none';
    });
    
    container.style.display = 'flex';
    lawElement.style.display = 'flex';
  }

  function hideLaw(law) {
    const container = document.getElementById('contentContainer');
    const lawElement = document.getElementById(`${law}Law`);
    
    container.style.display = 'none';
    lawElement.style.display = 'none';
  }