## Login awareness

Notes:
- Login awareness on a static site?
- We won’t spend too much time talking about this.
- It can be summed up in one word.

------

## 🍪<!-- .element: style="font-size: 12rem;" -->

Notes:
- this is a cookie (i think some of you might a biscuit)
- we used cookies and added our static site domain & URL to the approved CORS headers in open edx

------

### Code snippet <!-- .element: class="hide" -->

```python
# convincing open edx to 💕 a marketing site
CROSS_DOMAIN_CSRF_COOKIE_DOMAIN: "{{ ROOT_DOMAIN }}"
SHARED_COOKIE_DOMAIN: "{{ ROOT_DOMAIN }}"
CSRF_TRUSTED_ORIGINS.append("{{ MARKETING_SITE_BASE_URL }}")
CORS_ORIGIN_WHITELIST.append("{{ ROOT_URL }}")
```

Notes:
- `ROOT_DOMAIN` = `thegymnasium.com`
- `ROOT_URL` and `MARKETING_SITE_BASE_URL` = `https://thegymnasium.com`
