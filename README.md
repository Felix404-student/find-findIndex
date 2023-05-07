# find-findIndex
find / findIndex practice lesson for UMass/Springboard bootcamp

Written in Javascript and HTML

<div class="section" id="finduserbyusername">
<h3>findUserByUsername</h3>
<p>Write a function called <cite>findUserByUsername</cite> which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.</p>
<div class="highlight-js notranslate"><div class="highlight"><pre><span></span><span class="kd">const</span> <span class="nx">users</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">{</span><span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;mlewis&#39;</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;akagen&#39;</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;msmith&#39;</span><span class="p">}</span>
<span class="p">];</span>

<span class="nx">findUserByUsername</span><span class="p">(</span><span class="nx">users</span><span class="p">,</span> <span class="s1">&#39;mlewis&#39;</span><span class="p">)</span> <span class="c1">// {username: &#39;mlewis&#39;}</span>
<span class="nx">findUserByUsername</span><span class="p">(</span><span class="nx">users</span><span class="p">,</span> <span class="s1">&#39;taco&#39;</span><span class="p">)</span> <span class="c1">// undefined</span>
</pre></div>
</div>
</div>
<div class="section" id="removeuser">
<h3>removeUser</h3>
<p>Write a function called <cite>removeUser</cite> which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.</p>
<div class="highlight-js notranslate"><div class="highlight"><pre><span></span><span class="kd">const</span> <span class="nx">users</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">{</span><span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;mlewis&#39;</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;akagen&#39;</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;msmith&#39;</span><span class="p">}</span>
<span class="p">];</span>

<span class="nx">removeUser</span><span class="p">(</span><span class="nx">users</span><span class="p">,</span> <span class="s1">&#39;akagen&#39;</span><span class="p">)</span> <span class="c1">// {username: &#39;akagen&#39;}</span>
<span class="nx">removeUser</span><span class="p">(</span><span class="nx">users</span><span class="p">,</span> <span class="s1">&#39;akagen&#39;</span><span class="p">)</span> <span class="c1">// undefined</span>
</pre></div>
</div>
</div>
