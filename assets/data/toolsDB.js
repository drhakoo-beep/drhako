
const toolsDB = [
{ name: "WHOIS", category: "1. Pasif Keşif (Reconnaissance)", icon: "fa-solid fa-address-card", desc: "Alan adı tescil bilgilerini ve iletişim adreslerini getirir.", cmd: "whois {domain}" },
{ name: "Dig", category: "1. Pasif Keşif (Reconnaissance)", icon: "fa-solid fa-server", desc: "DNS kayıtlarını (A, MX, TXT, NS) sorgular.", cmd: "dig {domain} ANY +noall +answer" },
{ name: "TheHarvester", category: "1. Pasif Keşif (Reconnaissance)", icon: "fa-solid fa-envelope", desc: "Arama motorlarını kullanarak e-posta, alt alan adı ve IP toplar.", cmd: "theHarvester -d {domain} -b all" },
{ name: "Subfinder", category: "1. Pasif Keşif (Reconnaissance)", icon: "fa-solid fa-sitemap", desc: "Hızlı ve pasif alt alan adı bulma aracıdır.", cmd: "subfinder -d {domain} -all" },
{ name: "WhatWeb", category: "1. Pasif Keşif (Reconnaissance)", icon: "fa-solid fa-code", desc: "Web sitesinin kullandığı teknolojileri, CMS'i ve sunucu sürümünü tanımlar.", cmd: "whatweb -v {url}" },
{ name: "WafW00f", category: "1. Pasif Keşif (Reconnaissance)", icon: "fa-solid fa-shield-halved", desc: "Web uygulamasının arkasında Firewall (WAF) olup olmadığını tespit eder.", cmd: "wafw00f {url}" },
{ name: "Nmap (Versiyon Taraması)", category: "2. Aktif Tarama (Scanning & Enum)", icon: "fa-solid fa-network-wired", desc: "Portlarda çalışan servislerin versiyonlarını ve OS tahmin eder.", cmd: "nmap -sV -O -T4 {domain}" },
{ name: "RustScan", category: "2. Aktif Tarama (Scanning & Enum)", icon: "fa-solid fa-bolt", desc: "Nmap'ten daha hızlı açık port bulur ve sonucu nmap'e aktarır.", cmd: "rustscan -a {domain} -- -sV" },
{ name: "Httpx", category: "2. Aktif Tarama (Scanning & Enum)", icon: "fa-solid fa-globe", desc: "Çalışan web sunucularını ve title bilgilerini hızlıca getirir.", cmd: "echo {domain} | httpx -title -status-code" },
{ name: "Waybackurls", category: "2. Aktif Tarama (Scanning & Enum)", icon: "fa-solid fa-clock-rotate-left", desc: "Archive.org üzerinden hedefe ait eski ve gizli URL uç noktalarını getirir.", cmd: "waybackurls {domain}" },
{ name: "Katana", category: "2. Aktif Tarama (Scanning & Enum)", icon: "fa-solid fa-spider", desc: "Yeni nesil, çok hızlı bir web crawling ve örümcek aracıdır.", cmd: "katana -u {url}" },
{ name: "Gobuster", category: "3. Dizin ve Dosya Taraması (Fuzzing)", icon: "fa-solid fa-folder-open", desc: "Çok hızlı dizin, dosya ve DNS brute-force aracıdır.", cmd: "gobuster dir -u {url} -w /usr/share/wordlists/dirb/common.txt" },
{ name: "Ffuf", category: "3. Dizin ve Dosya Taraması (Fuzzing)", icon: "fa-solid fa-bolt-lightning", desc: "Hızlı web fuzzer aracıdır. Dizin veya parametre keşfi için etkilidir.", cmd: "ffuf -w /usr/share/wordlists/dirb/common.txt -u {url}/FUZZ" },
{ name: "Feroxbuster", category: "3. Dizin ve Dosya Taraması (Fuzzing)", icon: "fa-solid fa-magnifying-glass-plus", desc: "Rust ile yazılmış, özyinelemeli (recursive) keşif aracıdır.", cmd: "feroxbuster -u {url}" },
{ name: "Nuclei", category: "4. Zafiyet Analizi (Vuln Assessment)", icon: "fa-solid fa-biohazard", desc: "Topluluk tabanlı şablonlarla bilinen zafiyetleri hızlıca bulur.", cmd: "nuclei -u {url}" },
{ name: "Nikto", category: "4. Zafiyet Analizi (Vuln Assessment)", icon: "fa-solid fa-user-secret", desc: "Web sunucusunu tehlikeli dosyalar ve eski sürümler için tarar.", cmd: "nikto -h {url}" },
{ name: "WPScan", category: "4. Zafiyet Analizi (Vuln Assessment)", icon: "fa-brands fa-wordpress", desc: "WordPress sitelerindeki zafiyetli eklentileri ve temaları tarar.", cmd: "wpscan --url {url} --enumerate u,vp,vt" },
{ name: "SQLMap", category: "5. İleri Seviye Sömürü (Exploitation)", icon: "fa-solid fa-database", desc: "SQL Injection açıklarını otomatik tespit eder ve DB sömürür.", cmd: "sqlmap -u \"{url}/page.php?id=1\" --dbs --batch" },
{ name: "Dalfox", category: "5. İleri Seviye Sömürü (Exploitation)", icon: "fa-solid fa-bug", desc: "Gelişmiş ve çok hızlı XSS zafiyet tarayıcı ve sömürücü.", cmd: "dalfox url {url}" },
{ name: "XSStrike", category: "5. İleri Seviye Sömürü (Exploitation)", icon: "fa-solid fa-mask", desc: "Akıllı payload'lar üreterek XSS açıklarını filtre bypass ile bulur.", cmd: "xsstrike -u \"{url}\"" }
];
